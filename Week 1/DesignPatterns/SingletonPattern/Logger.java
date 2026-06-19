import java.time.LocalDateTime;

public class Logger {

    // Single instance of Logger
    private static Logger instance;

    // Private constructor
    private Logger() {
        System.out.println("Logger Initialized Successfully!");
    }

    // Method to get the single instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    // Info Log
    public void logInfo(String message) {
        System.out.println("[INFO] " + LocalDateTime.now() + " : " + message);
    }

    // Warning Log
    public void logWarning(String message) {
        System.out.println("[WARNING] " + LocalDateTime.now() + " : " + message);
    }

    // Error Log
    public void logError(String message) {
        System.out.println("[ERROR] " + LocalDateTime.now() + " : " + message);
    }
}