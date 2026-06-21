public class Main {

    public static void main(String[] args) {

        Product[] products = {

                new Product(101, "Smart Wheelchair", "Mobility"),
                new Product(102, "AI Hearing Aid", "Hearing"),
                new Product(103, "Vision Assist Glasses", "Vision"),
                new Product(104, "Speech Assistant Device", "Communication"),
                new Product(105, "Smart Walking Stick", "Mobility")
        };

        System.out.println("===== Linear Search =====");

        Product result1 =
                SearchOperations.linearSearch(products, 103);

        if (result1 != null)
            System.out.println("Found: " + result1);
        else
            System.out.println("Product Not Found");

        System.out.println("\n===== Binary Search =====");

        Product result2 =
                SearchOperations.binarySearch(products, 104);

        if (result2 != null)
            System.out.println("Found: " + result2);
        else
            System.out.println("Product Not Found");
    }
}