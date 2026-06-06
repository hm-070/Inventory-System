public class InventoryManager {
    public static void main(String[] args) {
        int test = Integer.parseInt(args[1]);
        Inventory testInv = new Inventory();
        testInv.addToMap(args[0], test);
        System.out.println("testInv: " + testInv);
    }
}