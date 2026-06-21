import java.util.HashMap;

public class InventoryManager {

    HashMap<Integer, Product> inventory = new HashMap<>();

    public void addProduct(Product product) {
        inventory.put(product.productId, product);
        System.out.println(product.productName + " added successfully.");
    }

    public void updateProduct(int productId, int quantity, double price) {

        if (inventory.containsKey(productId)) {

            Product product = inventory.get(productId);

            product.quantity = quantity;
            product.price = price;

            System.out.println("Product updated successfully.");
        } else {
            System.out.println("Product not found.");
        }
    }

    public void deleteProduct(int productId) {

        if (inventory.remove(productId) != null) {
            System.out.println("Product deleted successfully.");
        } else {
            System.out.println("Product not found.");
        }
    }

    public void displayInventory() {

        System.out.println("\n===== Inventory =====");

        for (Product product : inventory.values()) {
            System.out.println(product);
        }
    }
}