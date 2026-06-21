import java.time.LocalDateTime;

public class Logger {

    private static Logger instance;

    private Logger() {
        System.out.println("Logger Initialized Successfully!");
    }

    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    public void logInfo(String message) {
        System.out.println("[INFO] " + LocalDateTime.now() + " : " + message);
    }

    public void logWarning(String message) {
        System.out.println("[WARNING] " + LocalDateTime.now() + " : " + message);
    }

    public void logError(String message) {
        System.out.println("[ERROR] " + LocalDateTime.now() + " : " + message);
    }
}