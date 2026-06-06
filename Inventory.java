import java.util.*;

public class Inventory {
    protected Map<String, Integer> InventoryMap = new HashMap<>();

    public Map getInventoryMap(){
        return InventoryMap;
    }

    public void addToMap(String itemName, Integer howManyToAdd){
        if (InventoryMap.containsKey(itemName)){
            int howManyAlrIn = InventoryMap.get(itemName);
            InventoryMap.replace(itemName, howManyAlrIn+howManyToAdd);
        } else {
            InventoryMap.put(itemName, howManyToAdd);
        }
    }

    @Override
    public String toString(){
        String rtn = "";
        for (String item : InventoryMap.keySet()){
            if ((item.toLowerCase()).charAt(item.length()-1) == 's'){ rtn += "\n There are " + InventoryMap.get(item) + " " + item + "\'"; } 
            else { rtn += "\n There are " + InventoryMap.get(item) + " " + item + "s";}
        }
        return rtn;
    }
}
