# GSA Swag Roulette

### Original idea and application by [Ryan Williams](https://github.com/rpwilliams/GoogleSwagGenerator).

Ryan had a rad idea making a swag giveaway roulette application! This is just a lightweight web implementation.

The user enters inventory item names and quantities into the panel on the right. The SWAG button then selects an item at random, reduces its quantity by 1, and displays it in changing colors to celebrate the swag giveaway. Every "spin", the list of items is purged of items whose quantity is 0. The swag distributor can use the +/- buttons to the right of inventory entries to manually adjust quantity if needed.

Right now the probability distribution is just based on how many types of items are in the list, meaning there is an equal chance to get each item so long as each item quantity is greater than one. For future additions, another "mode" could take into account item scarcity by randomly selecting from a list of all instances of items, tying the probability of winning to actual quantities of items. For example, if I have 50 sunglasses and 3 t-shirts to give away, the current mode would select a t-shirt with a 50% chance on the first turn, and the probabilities would be fixed as long as the number of different item types is the samew. In the proposed mode, there would only be a 5.7% (3 shirts / 53 total items) chance of winning a t-shirt on the first turn, and the probability would fluctuate as items are removed from the list.

Yet another mode could introduce potential failures, i.e. not winning anything. Personally, that doesn't fit with the mission of tabling for Google! I want everyone to get something and feel happy about it, but there are plenty of scenarios where not having everyone be a winner would be necessary. There are a few ways to implement this.


