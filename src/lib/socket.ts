import { io, Socket } from 'socket.io-client';

class SocketConnection {
  private static instance: SocketConnection;
  socket: Socket | undefined;

  static getInstance() {
    if (!SocketConnection.instance) {
      SocketConnection.instance = new SocketConnection();
    }
    return SocketConnection.instance;
  }

  connect(serverUrl: string) {
    if (!this.socket) {
      this.socket = io(serverUrl);
      this.socket.io.on('reconnect', () => {
        console.log('conexão perdida. reconectando...')
      });
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.removeAllListeners();
      this.socket.close();
      this.socket = undefined;
    }
  }

  emit(title: string, content: string | JSON){
    this.socket && this.socket.emit(title, content);
  }

  addEventListener(event: string, callback: (event: any) => void) {
    if (!this.socket) {
      throw new Error('O socket ainda não foi definido.');
    }
    this.socket.on(event, callback);
  }

  removeAllListeners() {
    this.socket && this.socket.removeAllListeners();
  }
}

export default SocketConnection;
