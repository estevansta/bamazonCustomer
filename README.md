# bamazonCustomer

## What is Bamazon?
Bamazon is an CLI e-commerce app that allows the customer to purchase from a set list of items from the Bamazon inventory list where the quantities interact with how many the customer decides to purchase. 

## How do I use Bamazon?
Since Bamazon is a command-line interface app, you open it using your command line. 
*node bamazonCustomer.js* to access and start it.

From there customers will be introduced to a list of items on a table (products):
* item_id - its unique identifier that is labeled as an integer (1-10)
* product_name - will be its name as a varchar(20)
* department_name -
* price - will be its price as an integer(10) and the cost to the customer
* stock_quantity - will be its quantity which will have variable amounts that will react with the consumer's purchases

as well as a prompt with two messages that the user has to use to interact with the app:
1. Input the item ID of the product you would like to purchase
1. How many units of the product would you like to buy???

The app will check the quanitity in the table then take the quanitity and subtract from amount of units purchased.
If quantity is too low it will return 'Insufficient Quantity' and will stop the purchase from completing.

If the order is completed, MySQL will update its table stock_quantity and the total cost of what the user purchased will be displayed to the user and finally given a prompt of
* total $ purchased and what items purchased
* continue shopping? (y/n)


## Technologies/Languages used
* Javascript
* Node.js
* MySQL
* NPM Inquierer
* NPM mysql

