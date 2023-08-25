import { randomUUID } from 'node:crypto';
import { Replace } from '@helpers/Replace';
import { Content } from './content';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readOn?: Date | null;
  canceledOn?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public set readOn(readOn: Date | null | undefined) {
    this.props.readOn = readOn;
  }

  public get readOn(): Date | null | undefined {
    return this.props.readOn;
  }

  public get canceledOn(): Date | null | undefined {
    return this.props.canceledOn;
  }

  public cancel() {
    this.props.canceledOn = new Date();
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
