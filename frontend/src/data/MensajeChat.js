export const MensajeChat = {
  id: ``, // ID timestamp y random
  owner: '', // 'USER' o 'IA'
  timestamp: new Date().toISOString(),
  content: '', // Contenido del mensaje
};

export function createMessage(owner, content) {
  return {
    id: `${Date.now()}-${Math.random().toString(10)}`,
    owner,
    timestamp: new Date().toISOString(),
    content,
  };
}
