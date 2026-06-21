public class Main {

    public static void main(String[] args) {

        double currentValue = 100000;
        double growthRate = 0.10; // 10%
        int years = 5;

        double result =
                FinancialForecast.futureValue(
                        currentValue,
                        growthRate,
                        years);

        System.out.println("Current Value : ₹" + currentValue);
        System.out.println("Growth Rate   : 10%");
        System.out.println("Years         : " + years);

        System.out.println("\nFuture Value after "
                + years + " years = ₹"
                + String.format("%.2f", result));
    }
}