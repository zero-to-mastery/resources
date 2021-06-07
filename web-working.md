Hey,
Let's go through a brief introduction about how the web works.

I assume we surf through many websites everyday for our daily needs such as news, movies, weather etc. but have you ever wondered how the websites are showing up on your
browser when you type and submit the url. Most of us might think that it is only because of the internet so let's see to what extent that is true.

To keep things simple, lets use this example: suppose you enter www.yotube.com and submit, you get the home page of youtube right? But how is it 
happening? There is something which takes your request and resopnds with a page which matches your request. But what if you enter any random url which does not exist
and then hit submit? You would get an error 404 page not found or the given servers IP address can't be reached.

So let's take a closer look on what happens when you enter a url.
Before we get into the process behind it, let me make few terms clear for you so that you can follow along with me,

First thing is Domain.
What is domain? 
Domain is a place on the web where you can store your files. In the case of websites, you store html template server files and packages and remember each 
domain would have a unique IP address which is used to identify it.

Now when it comes to web hosting, this plays a major part in serving the websites. All domains were connected to a single large server called DNS server which is then connected
to your browser through the internet. So consider your internet service provider as the broker between you and the DNS server. However, today, as there are thousands of 
websites created and hosted everyday, the DNS server cannot process such a huge amount of traffic efficiently and would slow down the response time. Here what I mean
by response is like when you request www.youtube.com: it would respond with the youtube page. So to improve the response time, the DNS are split into many branches 
and put all around the globe and are inter-linked with each other.

Now that you are clear with basic terms let's see what actually happens when you enter the url.

First it would be sent to the nearest DNS server them it would be sent to the RNS server which is also called a root name server which would take in the url. Then it would return the IP address corresponding to the given url or domain. Once we have our IP address, we will recursively find the DNS server which is linked 
with that IP address. When we find the right DNS server the connection will be established between you and the domain.

Now it would go through the url you entered and find the resource file mentioned if it exists. So what is this resource file and how do you enter it? It is
actually very simple. First, you enter the domain name, like www.google.com for example, then you enter the resource file path, such as www.google.com/contact.
Then the file server would find the contact page and send it to your browser. Don't worry, you don't have to enter the resource file path as the buttons and 
links on the page would do it for you when you click them. For example, if you click the contact button on the google home page the button will enter a new url and submit,
and will then read www.google.com/contact.

But once it knows what to send, how will it send it from the domain to your local browser? 
This is done with the help of TCP/IP which stands for transmission control protocol and internet protocol. They will take the responsibility of sending the data t your
browser in the form of JSON objects. Then your browser will process the data and render it on your screen. 
This whole process happens in a fraction of second. Amazing, right!?

Thank you :)

For more information about this topic please visit the following link :-
https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works#:~:text=The%20browser%20sends%20an%20HTTP,internet%20connection%20using%20TCP%2FIP.
