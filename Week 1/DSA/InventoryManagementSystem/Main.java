public class Main {

    public static void main(String[] args) {

        InventoryManager manager = new InventoryManager();

        manager.addProduct(
                new Product(101,
                        "Smart Wheelchair",
                        15,
                        45000));

        manager.addProduct(
                new Product(102,
                        "AI Hearing Aid",
                        20,
                        18000));

        manager.addProduct(
                new Product(103,
                        "Vision Assist Glasses",
                        10,
                        25000));

        manager.displayInventory();

        manager.updateProduct(102, 25, 20000);

        manager.deleteProduct(103);

        manager.displayInventory();
    }
}