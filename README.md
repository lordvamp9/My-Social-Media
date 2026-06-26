# My Social Media - Secure P2P Messenger 

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![PeerJS](https://img.shields.io/badge/PeerJS-000000?style=for-the-badge&logo=webrtc&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)

Una red social privada diseñada para grupos de amigos o parejas. Utiliza tecnología Peer-to-Peer (WebRTC) para crear salas de chat efímeras, seguras y privadas mediante códigos de sesión criptográficamente seguros. Todo esto con una interfaz moderna basada en la disposición de Discord, pero manteniendo la clásica y nostálgica paleta de colores de MSN Messenger.

Desarrollado por **vamp9**.

## Demo
[https://my-social-web.netlify.app/](url)

##  Características

- ** Salas Privadas Seguras**: Generación de códigos UUID únicos para cada sesión, garantizando que nadie pueda adivinar tu sala.
- ** Chat en Tiempo Real**: Envío y recepción de mensajes instantáneos sin servidores intermediarios (P2P).
- ** Videollamadas**: Conéctate cara a cara con tus amigos de forma fluida.
- ** Compartir Pantalla**: Función estilo Discord para retransmitir tu pantalla durante una llamada.
- ** Transferencia de Archivos**: Envía imágenes y documentos directamente.
- ** Zumbidos**: ¡Envía un clásico zumbido para llamar la atención!
- ** Diseño Híbrido**: Disposición estructurada y cómoda inspirada en Discord, con los nostálgicos colores y estilo visual de MSN Messenger (glassmorphism).

## Tecnologías

- **Astro**: Framework web súper rápido.
- **React**: Gestión de componentes interactivos y estado de la UI.
- **TailwindCSS**: Estilizado moderno y utilitario.
- **Zustand**: Manejo de estado global ligero.
- **PeerJS**: Abstracción de WebRTC para conexiones P2P.
- **Lucide React**: Iconografía moderna.

##  Instalación y Uso Local

1. Clona este repositorio:
   ```bash
   git clone https://github.com/vamp9/My-Social-Media.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre `http://localhost:4321` en tu navegador.

## Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.
