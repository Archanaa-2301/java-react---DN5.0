public class Main {

    public static void main(String[] args) {

        NotificationFactory factory;

        System.out.println("=== Notification Factory Demo ===\n");

        // Email Notification
        factory = new EmailFactory();
        Notification email = factory.createNotification();
        email.sendNotification();

        System.out.println();

        // SMS Notification
        factory = new SMSFactory();
        Notification sms = factory.createNotification();
        sms.sendNotification();

        System.out.println();

        // Push Notification
        factory = new PushFactory();
        Notification push = factory.createNotification();
        push.sendNotification();

        System.out.println("\nAll notifications processed successfully.");
    }
}