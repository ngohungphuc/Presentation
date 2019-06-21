API url: 
 * https://jsonplaceholder.typicode.com/albums

 * https://jsonplaceholder.typicode.com/photos

* Scenario 1: 

> Given use go to album page.
> 
> Then they should see all album.
> 
> And they can click to album too see the detail of album.

* Scenario 2:

> Given user in album page.
> 
> Then they can see delete album button.
> 
> When they click on delete album button.
> 
> Then they should see a confirm popup.
> 
> They should not see thay album.

* Scenario 3:

> Given user in album page.
> 
> They can go to album detail.
> 
> And they can see the list of photo.
> 
> And they click add to add new photo to album.

* Scenario 4:

> Given user in album page.
> 
> They can go to album detail.
> 
> And they can see the list of photo.
> 
> And they click add to delete photo of album by choose 1 or more.

* Scenario 5:

> Given user in album page.
> 
> They can add new album.
> 
> And they can see the button on the top right conner.
>
> When they click add new album button they should see a popup to add all info for the album.
> 
> And when they click save the new created album should be display.

Note: 
* Should apply lazy load module
* Smart and dump component seperation
* NGRX
* Try to use SCSS to do styling (if any)
* Use bootstrap is ok
* Since this is de mock api so any thing related to add, edit or delete we will do in memory.