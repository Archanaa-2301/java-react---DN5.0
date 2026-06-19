public class Main {

    public static void main(String[] args) {

        Logger logger1 = Logger.getInstance();

        logger1.logInfo("Application Started");
        logger1.logWarning("Memory Usage is High");
        logger1.logError("Database Connection Failed");

        Logger logger2 = Logger.getInstance();

        System.out.println("\nChecking Singleton Pattern...");
        System.out.println("logger1 hashCode : " + logger1.hashCode());
        System.out.println("logger2 hashCode : " + logger2.hashCode());

        if (logger1 == logger2) {
            System.out.println("SUCCESS: Only one Logger instance exists.");
        } else {
            System.out.println("FAILED: Multiple Logger instances created.");
        }
    }
}