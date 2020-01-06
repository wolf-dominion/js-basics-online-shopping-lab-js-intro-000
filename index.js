var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) 
{
  var itemObject = {};
  
  itemObject["itemName"] = item;
  
  var randNum = Math.floor(Math.random() * 100) + 1;
  
  itemObject["itemPrice"] = randNum;
  
  cart.push(itemObject);
  
  return `${item} has been added to your cart.`;
}

function viewCart() 
{
    var listA = "";
    
    if (cart.length === 1) // this loop is only for if there is one item in the array 
    {
        for(var i = 0; i < cart.length; i++)
        {
          listA = `${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}.`;
        }
    
      return `In your cart, you have ${listA}.`;
      
    }
    
    if (cart.length > 1) // returns the last item with an and
    {
      for(i = 0; i < cart.length-1; i++)
      {
        listA += `${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}.`;
      }
      
      return `In your cart, you have ${listA}, and ${cart[cart.length]["itemName"]} at ${cart[cart.length]["itemPrice"]}.`;
      
    }
    else
    {
      return "Your shopping cart is empty.";
    }
    
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
