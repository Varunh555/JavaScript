function actualPrice(costPrice) {
    
    const discountAmount = costPrice * 0.20;
    
    
    const sellingPrice = costPrice - discountAmount;
    
    
    console.log("The selling price after applying a 20% discount is: $" + sellingPrice.toFixed(2));
}


actualPrice(100); 