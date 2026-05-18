# Young-boutique
Young Boutique is an aba-based fashion brand that offers trendy, affordable, and stylish outfits for confident women.We specialize in modern female fashion including casual wear, classy outfits, and statement pieces designed to make you stand out.We deliver across Lagos and Nigeria, bringing quality fashion directly to your doorstep.
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Eva Young Boutique</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&family=Playfair+Display:wght@600&display=swap" rel="stylesheet">

<style>
body{
margin:0;
font-family:'Poppins',sans-serif;
background:#f5f5f5;
}

header{
background:black;
color:white;
text-align:center;
padding:20px;
font-family:'Playfair Display',serif;
}

.hero{
background:url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d") center/cover;
height:80vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:white;
text-align:center;
}

.hero h1{
font-size:45px;
}

.container{
padding:20px;
max-width:1000px;
margin:auto;
}

.products{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:20px;
}

.product{
background:white;
padding:10px;
border-radius:10px;
box-shadow:0 4px 10px rgba(0,0,0,0.1);
}

.product img{
width:100%;
border-radius:10px;
}

input,textarea{
width:100%;
padding:10px;
margin:5px 0;
}

button{
background:black;
color:white;
padding:10px;
border:none;
cursor:pointer;
}

.review{
background:white;
padding:10px;
margin:10px 0;
border-radius:10px;
}
</style>
</head>

<body>

<header>
<h1>Eva Young Boutique</h1>
<p>Luxury Fashion | Worldwide Delivery</p>
</header>

<div class="hero">
<h1>Upgrade Your Style</h1>
<p>Premium Fashion Collections</p>
</div>

<div class="container">

<h2>Featured Products</h2>

<div class="products">
<div class="product">
<img src="REPLACE_WITH_IMAGE_1">
<p>Joggers Set - ₦10,000</p>
</div>

<div class="product">
<img src="REPLACE_WITH_IMAGE_2">
<p>Luxury Kaftan Dress</p>
</div>

<div class="product">
<img src="REPLACE_WITH_IMAGE_3">
<p>Black Two Piece Set</p>
</div>
</div>

<hr>

<h2>Login</h2>
<input id="email" placeholder="Email">
<input id="password" type="password" placeholder="Password">
<button onclick="loginUser()">Login</button>

<hr>

<h2>Leave a Review</h2>
<input id="name" placeholder="Your Name">
<textarea id="review"></textarea>
<button onclick="submitReview()">Submit</button>

<h2>Reviews</h2>
<div id="reviews"></div>

</div>

<div style="background:black;color:white;text-align:center;padding:20px;">
<h2>Customer Service</h2>
<p>📞 09032741903</p>
<p>📧 youngonwunatuegwu@gmail.com</p>
</div>

<footer style="background:#111;color:white;text-align:center;padding:15px;">
© 2026 Eva Young Boutique
</footer>

<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>

<script>
const supabase = supabase.createClient(
"https://qyucqdjddgyzevorubom.supabase.co",
"sb_publishable_JsW9kNBEeRi-rHxidTYqHQ_K2k76ZX9"
);

async function loginUser(){
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

const {error}=await supabase.auth.signInWithPassword({email,password});
if(error) alert(error.message);
else alert("Login successful");
}

async function submitReview(){
const {error}=await supabase.from("reviews").insert([{
customer_name:document.getElementById("name").value,
review:document.getElementById("review").value
}]);

if(error) alert(error.message);
else loadReviews();
}

async function loadReviews(){
const {data}=await supabase.from("reviews").select("*");

let box=document.getElementById("reviews");
box.innerHTML="";

data.forEach(r=>{
box.innerHTML+=`<div class="review"><h4>${r.customer_name}</h4><p>${r.review}</p></div>`;
});
}

loadReviews();
</script>

</body>
</html>.REPLACE_WITH_IMAGE_1
REPLACE_WITH_IMAGE_2
REPLACE_WITH_IMAGE_3<p>
<a href="https://wa.me/2348149327923?text=Hello%20Eva%20Young%20Boutique%2C%20I%20am%20interested%20in%20your%20products%20and%20want%20to%20place%20an%20order.%20Please%20assist%20me." 
style="color:#25D366;text-decoration:none;font-weight:bold;">
Message to Order Now
</a>
</p><!-- ADD THIS PART INSIDE YOUR EXISTING CODE (I already positioned it correctly) -->

<div style="padding:30px; max-width:900px; margin:auto;">
  <h2 style="text-align:center;">About Eva Young Boutique</h2>

  <p style="line-height:1.7; color:#333;">
  Eva Young Boutique is a modern fashion destination dedicated to delivering style, confidence, and comfort to individuals who value quality and uniqueness. Our brand is built on the belief that fashion is more than just clothing — it is a powerful expression of identity, personality, and lifestyle. Every piece we offer is carefully selected to ensure it meets the highest standards of design, durability, and elegance.
  </p>

  <p style="line-height:1.7; color:#333;">
  We specialize in trendy and versatile outfits ranging from casual wear to statement pieces that elevate your everyday look. Whether you’re stepping out for a casual day, attending an event, or simply looking to upgrade your wardrobe, Eva Young Boutique provides options that combine comfort with sophistication. Our collections are designed to suit different tastes, body types, and occasions, ensuring that every customer finds something that feels made just for them.
  </p>

  <p style="line-height:1.7; color:#333;">
  At Eva Young Boutique, we pay close attention to detail — from fabric quality to fit and finishing. Our goal is to provide outfits that not only look good but also feel great when worn. We understand that confidence comes from wearing something that truly represents you, which is why our pieces are selected to help you stand out effortlessly.
  </p>

  <p style="line-height:1.7; color:#333;">
  Customer satisfaction is at the heart of everything we do. We are committed to providing a seamless shopping experience, from browsing our collections to receiving your order. With reliable customer service and worldwide delivery, we ensure that our customers enjoy convenience, trust, and satisfaction every step of the way.
  </p>

  <p style="line-height:1.7; color:#333;">
  We also value the voices of our customers. Through reviews and feedback, we continuously improve and grow, making sure we meet and exceed expectations. Eva Young Boutique is not just a store — it is a community of fashion lovers who appreciate quality, style, and authenticity.
  </p>

  <p style="line-height:1.7; color:#333;">
  Step into Eva Young Boutique and experience fashion that speaks for you. Here, every outfit is more than clothing — it’s confidence, elegance, and self-expression.
  </p>
</div>
