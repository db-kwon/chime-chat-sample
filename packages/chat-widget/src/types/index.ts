export interface ChatMessage {
  /** The unique identifier of the message. */
  id: string;
  /** The displayed text of the message sent. */
  content: string;
  /** The timestamp when the message was originally sent by the sender. */
  createdTimestamp: string;
  /** The timestamp of the last time the message was edited. */
  lastEditedTimestamp?: string;
  /** Determines if a message was redacted (deleted) by a user. */
  redacted: boolean;
  /** The display name of the sender. */
  senderName: string;
  /** The unique identifier of the sender. */
  senderId: string;
}

export type Message = ChatMessage;

export interface ChatConfig {
  region: string;
  credentials: {
    accessKeyId: string;
    secretAccessKey: string;
  };
  meetingId?: string;
  attendeeId?: string;
}
