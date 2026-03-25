const sampleListings = [
{
title: "Cozy Beachfront Cottage",
description: "Escape to this charming beachfront cottage with beautiful ocean views and peaceful surroundings.",
image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
price: 1500,
location: "Malibu",
country: "United States",
},
{
title: "Modern Loft in Downtown",
description: "A stylish loft located in the heart of the city, perfect for exploring nightlife and cafes.",
image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
price: 1200,
location: "New York City",
country: "United States",
},
{
title: "Mountain Retreat Cabin",
description: "Quiet wooden cabin surrounded by mountains and forests, ideal for nature lovers.",
image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
price: 900,
location: "Aspen",
country: "United States",
},
{
title: "Luxury Villa with Infinity Pool",
description: "Beautiful luxury villa with a private infinity pool overlooking tropical landscapes.",
image: "https://images.unsplash.com/photo-1613977257363-707ba9348227",
price: 3200,
location: "Bali",
country: "Indonesia",
},
{
title: "Traditional Japanese House",
description: "Experience Japanese culture in this peaceful wooden house with tatami rooms.",
image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
price: 800,
location: "Kyoto",
country: "Japan",
},
{
title: "Desert Safari Camp",
description: "Enjoy a magical desert night with camel rides and traditional Arabian food.",
image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
price: 650,
location: "Dubai",
country: "United Arab Emirates",
},
{
title: "Lakeview Wooden Cabin",
description: "Relax in this peaceful cabin overlooking a stunning lake with kayaking opportunities.",
image: "https://images.unsplash.com/photo-1507089947367-19c1da9775ae",
price: 750,
location: "Lake Tahoe",
country: "United States",
},
{
title: "Paris Romantic Apartment",
description: "Beautiful apartment perfect for couples located near famous Paris landmarks.",
image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
price: 1400,
location: "Paris",
country: "France",
},
{
title: "Cliffside Santorini House",
description: "Whitewashed house with breathtaking views of the Aegean Sea.",
image: "https://images.unsplash.com/photo-1505692794403-35c4c0f0b0f7",
price: 2000,
location: "Santorini",
country: "Greece",
},
{
title: "London City Studio",
description: "Compact and modern studio apartment in central London.",
image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
price: 1100,
location: "London",
country: "United Kingdom",
},
{
title: "Swiss Alpine Chalet",
description: "Luxury chalet with panoramic mountain views and cozy interiors.",
image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
price: 1800,
location: "Zermatt",
country: "Switzerland",
},
{
title: "Countryside Farmhouse",
description: "Traditional farmhouse surrounded by green fields and fresh air.",
image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
price: 700,
location: "Tuscany",
country: "Italy",
},
{
title: "Beach Bungalow",
description: "A small tropical bungalow steps away from the beach.",
image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2101c",
price: 950,
location: "Phuket",
country: "Thailand",
},
{
title: "Iceland Glass Cabin",
description: "Watch the northern lights from this modern glass cabin in Iceland.",
image: "https://images.unsplash.com/photo-1505691723518-34f1c9d0d0fa",
price: 1700,
location: "Reykjavik",
country: "Iceland",
},
{
title: "Sydney Harbor Apartment",
description: "Modern apartment with views of the Sydney Opera House.",
image: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
price: 1600,
location: "Sydney",
country: "Australia",
},
{
title: "Toronto Lake Condo",
description: "Luxury condo overlooking Lake Ontario.",
image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
price: 1300,
location: "Toronto",
country: "Canada",
},
{
title: "Barcelona Art Loft",
description: "Creative loft apartment filled with art and natural light.",
image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
price: 1200,
location: "Barcelona",
country: "Spain",
},
{
title: "Treehouse Jungle Retreat",
description: "Stay in a magical treehouse surrounded by tropical rainforest.",
image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
price: 850,
location: "Ubud",
country: "Indonesia",
},
{
title: "Maldives Water Villa",
description: "Luxury overwater villa with crystal clear lagoon views.",
image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
price: 4500,
location: "Malé",
country: "Maldives",
},
{
title: "New Delhi Heritage Haveli",
description: "Traditional Indian haveli offering cultural and royal experience.",
image: "https://images.unsplash.com/photo-1560448075-bb4caa6b2bcf",
price: 600,
location: "New Delhi",
country: "India",
},

{
title: "Goa Beach House",
description: "Relaxing beach house with palm trees and sunset views.",
image: "https://images.unsplash.com/photo-1505692794403-55e7c0c6f5a4",
price: 700,
location: "Goa",
country: "India",
},

{
title: "Rishikesh River Cottage",
description: "Peaceful riverside cottage ideal for yoga and meditation retreats.",
image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
price: 500,
location: "Rishikesh",
country: "India",
},

{
title: "Kerala Backwater Villa",
description: "Luxury villa surrounded by beautiful Kerala backwaters.",
image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
price: 900,
location: "Alleppey",
country: "India",
},

{
title: "Manali Snow Cabin",
description: "A cozy wooden cabin in the snowy mountains of Himachal.",
image: "https://images.unsplash.com/photo-1507086182422-97bd7ca2413b",
price: 650,
location: "Manali",
country: "India",
},

{
title: "Shimla Colonial Cottage",
description: "Colonial style cottage with vintage interiors.",
image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
price: 600,
location: "Shimla",
country: "India",
},

{
title: "Jaipur Royal Palace Stay",
description: "Experience royal living in a historic palace stay.",
image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc",
price: 1000,
location: "Jaipur",
country: "India",
},

{
title: "Udaipur Lake Palace View",
description: "Beautiful stay overlooking the famous Lake Pichola.",
image: "https://images.unsplash.com/photo-1560448075-bb4caa6b2bcf",
price: 1100,
location: "Udaipur",
country: "India",
},

{
title: "Mumbai Sea View Apartment",
description: "Luxury apartment with stunning Arabian Sea views.",
image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
price: 1500,
location: "Mumbai",
country: "India",
},

{
title: "Bangalore Modern Studio",
description: "Minimalist studio apartment in the tech hub of India.",
image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
price: 800,
location: "Bangalore",
country: "India",
},

{
title: "Hyderabad Luxury Penthouse",
description: "Modern penthouse apartment with skyline views.",
image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
price: 1400,
location: "Hyderabad",
country: "India",
},

{
title: "Pondicherry French Villa",
description: "Colorful French style villa near the beach.",
image: "https://images.unsplash.com/photo-1505692794403-55e7c0c6f5a4",
price: 750,
location: "Pondicherry",
country: "India",
},

{
title: "Darjeeling Tea Estate Bungalow",
description: "Stay inside a beautiful tea plantation estate.",
image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
price: 700,
location: "Darjeeling",
country: "India",
},

{
title: "Ladakh Mountain Camp",
description: "Adventure camp surrounded by dramatic Himalayan landscapes.",
image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
price: 550,
location: "Ladakh",
country: "India",
},

{
title: "Andaman Beach Hut",
description: "Simple beach hut with crystal clear water and coral reefs.",
image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2101c",
price: 850,
location: "Havelock Island",
country: "India",
},

{
title: "Ooty Hill Cottage",
description: "Beautiful cottage in the misty hills of Ooty.",
image: "https://images.unsplash.com/photo-1507089947367-19c1da9775ae",
price: 600,
location: "Ooty",
country: "India",
},

{
title: "Coorg Coffee Estate Villa",
description: "Stay inside a coffee plantation surrounded by greenery.",
image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
price: 700,
location: "Coorg",
country: "India",
},

{
title: "Kashmir Houseboat Stay",
description: "Experience traditional houseboat living on Dal Lake.",
image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
price: 900,
location: "Srinagar",
country: "India",
},

{
title: "Amritsar Heritage Stay",
description: "Traditional Punjabi haveli close to Golden Temple.",
image: "https://images.unsplash.com/photo-1560448075-bb4caa6b2bcf",
price: 500,
location: "Amritsar",
country: "India",
},

{
title: "Varanasi Riverside Guesthouse",
description: "Stay by the Ganges and experience spiritual India.",
image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
price: 450,
location: "Varanasi",
country: "India",
}

];





module.exports = { data: sampleListings };