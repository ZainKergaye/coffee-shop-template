 # YANA Coffee Shop Website 


Domain:  http://yanacoffeeshop.com

 Hours spent: 25


### References
sightglasscoffee.com << reference 

quillscoffee.com << That too

republicofpie.com

artcadenyack.com




# To build and deploy:

ng build --base-href "https://ZainKergaye.github.io/coffee-shop-template/" 

npx angular-cli-ghpages --dir=dist/coffee-shop-template



## TODO
- The "Welcome to Y.A.N.A" & "Order online or visit us" is on top of the nav bar.  DONE
- In the about section, the placeholder image does not show DONE
- On apple iphone, horizontal view, Popular item images are stretched DONE
- Reduce size of nav.scss by deleting duplicate lines in media, it defaults to the non media one so no need for useless space DONE
- implement lazy loading to offscreen images