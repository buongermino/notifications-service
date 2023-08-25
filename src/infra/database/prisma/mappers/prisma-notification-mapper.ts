import { Notification } from '@application/entities/notification';

export class PrismaNotificationsMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
      readOn: notification.readOn,
      createdAt: notification.createdAt,
    };
  }
}
