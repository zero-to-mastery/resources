Hey,
Let's go through a breif introduction about how does the web work.

I assume We surf through many websites everyday for our daily needs such as news,movies,weather etc. but have you ever wondered how are the websites showing up on your
browser when you type and submit the url. Most of us might think that it is only beacuse of the internet so lets see for what extent is it true.

So to make it simpe for you lets take an example to understand, suppose you enter www.yotube.com and submit you get the home page of youtube right, but how is it 
happening , there is something which takes your request and resopnds with a page which matches your request. but what if you enter any random url which does not exist
and then hit submit you would get an error 404 page not found or the given servers IP address can't be reached.

So lets take a closer look on whtat happens when you enter a url.
before we get into the process behind it, let me make few terms clear for you so that you can follow along with me,

First thing is Domain,
What is domain? 
consider domain is a place in the web where you can store your files, incase of websites you store you html templates server files and packages and remember each 
domain would have a unique IP address which is used to indetify it.

Now coming to web hosting this plays a major part in serving the websites, all domains were connected to a single large server called DNS server which is then commected
to your browser through the internet, so consider you internet service provider as the broker between you and the DNS server. but  today as there are thousands of 
websites created and hosted everyday THE DNS server cannot process such a huge amount of traffic efficiently and would slow down the response time. here what I mean
by respomnse is like when you request www.youtube.com it would respond with the youtube page. so to imporve the response time the dns are split into many branches 
and put all around the globe and are inter-linked with each other.

Now that you are clear with basic terms let's see what actully happens when you enter the url

First it would be sent to the nearest DNS server them it would be sent to the RNS server which is also called a root name server which would take in the url and
the it wouls return the IP address corrspondong to the given url or doman,  now once we have our IP address now we will recursively find the dns server which is linked 
with that IP address. now when we find the right DNS server the connection will be establised between you and the domain.

Now it would go through you url enterd url and find for the resource file mentioned if any. so what is this resource file and how do you enter it ? it is
actually very simple first you enter the domain name like www.google.com  then after the domain you enter the reaource file path such as www.google.com/contact
then the file server would find the comatct page and send it to your browser. so dont worry you dont have to enter the resource file path as the buttons and 
links on the page would do it for when you click them like example if click the contact button on the google home page the button will enter a new url and submit 
saying www.google.com/contact.

But once it knows what to send. how will it send it from the domain to you local browser 
now this is done with help of TCP/IP which statnd for transmission conrrol protocal and internet protocal They will take the responsbilty of sending the data t your
browser in the form of JSON objects. Then your browser will process the data and render it on your screen. 
This whole process happens in a fraction of second, Amazing right!

Thank you :)

For more information about this topic please visit the following link :-
https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works#:~:text=The%20browser%20sends%20an%20HTTP,internet%20connection%20using%20TCP%2FIP.
