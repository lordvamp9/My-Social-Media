import { useEffect, useRef } from 'react';
import { useStore } from '../lib/store';
import { answerCall, startScreenShare } from '../lib/webrtc';
import { PhoneOff, MonitorUp, PhoneCall, Video } from 'lucide-react';

export default function CallModal() {
  const { call, incomingCall, localStream, remoteStream, endCall, isScreenSharing, users } = useStore();
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    if (localVideoRef.current && localStream) {
      localVideoRef.current.srcObject = localStream;
    }
  }, [localStream]);

  useEffect(() => {
    if (remoteVideoRef.current && remoteStream) {
      remoteVideoRef.current.srcObject = remoteStream;
    }
  }, [remoteStream]);

  if (incomingCall && !call) {
    const callerId = incomingCall.peer;
    const callerName = users[callerId]?.username || 'Alguien';
    return (
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-50">
        <div className="glass-card w-80 p-6 rounded-2xl flex flex-col items-center animate-bounce">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <PhoneCall className="w-10 h-10 text-blue-500 animate-pulse" />
          </div>
          <h2 className="text-xl font-bold mb-2 text-msn-text text-center">{callerName} te está llamando...</h2>
          
          <div className="flex space-x-4 mt-6 w-full">
            <button onClick={() => answerCall(incomingCall, true)} className="flex-1 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg flex justify-center items-center gap-2 font-semibold">
              <Video className="w-4 h-4" /> Contestar
            </button>
            <button onClick={() => { incomingCall.close(); useStore.getState().setStore({ incomingCall: null, ringtone: null }); }} className="flex-1 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg flex justify-center items-center font-semibold">
              Rechazar
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!call) return null;

  return (
    <div className="absolute inset-0 bg-black/80 flex flex-col z-50">
      {/* Header */}
      <div className="p-4 bg-gray-900 flex justify-between items-center shadow-md">
        <h2 className="text-white font-bold text-lg">Llamada en curso</h2>
        <div className="flex space-x-3">
          <button 
            onClick={startScreenShare}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-colors ${isScreenSharing ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
          >
            <MonitorUp className="w-5 h-5" />
            <span>{isScreenSharing ? 'Compartiendo' : 'Compartir Pantalla'}</span>
          </button>
          <button 
            onClick={endCall}
            className="flex items-center space-x-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors"
          >
            <PhoneOff className="w-5 h-5" />
            <span>Colgar</span>
          </button>
        </div>
      </div>
      
      {/* Video Area */}
      <div className="flex-1 relative p-4 flex items-center justify-center overflow-hidden">
        {remoteStream ? (
          <video 
            ref={remoteVideoRef} 
            autoPlay 
            className="w-full h-full object-contain rounded-xl bg-black"
          />
        ) : (
          <div className="text-white text-xl animate-pulse">Conectando...</div>
        )}
        
        {/* Local Video Mini */}
        {localStream && (
          <div className="absolute bottom-6 right-6 w-48 aspect-video bg-black rounded-lg overflow-hidden border-2 border-gray-600 shadow-xl z-10">
            <video 
              ref={localVideoRef} 
              autoPlay 
              muted 
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}
