---
layout: full
---
# Introduction {#intro}

This is a test for an one page datastory

[Retour au menu](./)

Hello, everyone! Welcome to my class on globalization, my name is Professor Knowbalization and I'll be your teacher today. I know that globalization can sometimes seem like a vast and complex topic, filled with economic jargon and cultural theory. However, today, I'm excited to introduce you to a way of understanding globalization that is as engaging as it is enlightening: through the lens of cinema.

As someone who has always been passionate about films, I'm conviced that movies not only entertain us but also reflect the economic, cultural, and social shifts that define globalization. By analyzing films, we can gain insights into how interconnected our world has become and how cultures intermingle and influence one another.

Throughout this course, we'll engage in a dynamic dialogue (I really encourage your participation !), where we'll dissect movies to uncover the deeper narratives of globalization. 

We'll start by examining the economic side of globalization in the film industry. This includes looking at co-productions and box office trends that mirror global trade and economic alliances. Then, we'll venture into the cultural realm, exploring how film genres and iconic characters cross borders and contribute to cultural exchanges. Finally, we'll consider the diversity of actors, highlighting how global mobility and migration influence the stories we see on screen.

My hope is that by the end of this course, you'll see globalization not just as an abstract concept, but as a living, breathing process that cinema both reflects and shapes. So, let's dive into this cinematic journey and discover the profound connections between film and globalization. I'm excited to see where this exploration takes us and to hear your thoughts and insights along the way. Let's get started!

Here's a petit plot:

a

diversity_score_evolution_by_region


a
a
a

a


a

a

a

a

a


a
a
aa
a

a


# I/ Economy {#part-1}

Economic globalization is the integration of national economies through trade, investment, capital flow, labor migration, and technology. It involves the expansion of international markets and the reduction of barriers to trade and investment.

Here's athe second interactive Plotly graph:


a


a

a

a

a

a

a

a
a


a
a

# II/ Culture {#part-2}
**Professor:**
> Cultural globalization refers to the transmission of ideas, meanings, and values around the world, leading to a more interconnected global culture. This process is often facilitated by media, travel, and the internet.


**Intellectual Student:**
>Sir, everyone knows that the United States are the leaders of globalization. So, if we want to know if a country is well integrated into globalization, we just need to look at its links with the United States, right?


**Professor:**
>An excellent point, Intellectual! And you know what? Cinema is actually a great way to explore this idea. Perhaps you’re not entirely wrong… Let’s look into it together.
So, how can we quantify the links, or rather the cultural influence of the United States on other countries in the film industry? For this analysis, we will rely on film summaries, as they often reflect key themes, characters, and locations.


**Jason the Troublemaker:**
>Ah, you’re going to talk about complicated statistics again, right?


**Professor:**
>Not at all, Jason! We’ll use a technique called zero-shot classification. This is a method in natural language processing (NLP) that allows a model to assign categories to a text, even if the model has never been specifically trained on these categories.
Using the HuggingFace Transformers library, we will classify the film summaries with a label, here "United States". This will give us a score, which will allow us to measure the extent to which a film is associated with American cultural influence.
Once we have an influence score for each film, we can average these scores for each country. This gives us a measure of the American cultural influence across the entire film production of a country.


**Intellectual Student:**
>So, if I understand correctly, the higher the average score, the more culturally influenced a country is by the United States in its films?


**Professor:**
>Exactly, Intellectual! Now, let’s see what this reveals. Let’s explore whether this influence has any connection with a country’s cinematic productivity.


<div style="width: 100%;display: flex; justify-content: center;">
  {% include oscatterplot.html %}
</div>

>Interestingly, we observe that, on average, the largest film producers tend to offer films more influenced by the United States than others. The two variables appear to be correlated, with an R² of 0.23 and a p-value of 6*10⁻⁷, suggesting a statistically significant relationship. This implies that being closer to American themes may help develop a more influential film industry.
Of course, I’m sure you’re curious to know which countries have the films most influenced by the United States.
Let’s group them by geographic region and observe the positioning of each region in this boxplot:

<div style="width: 100%;display: flex; justify-content: center;">
  {% include US_Influence_Region.html %}
</div>

>At first glance, the regions of the world with the highest scores indeed seem to be the most integrated into globalization. However, be careful not to group everyone together!
We can observe, in this boxplot, significant disparities in certain geographic areas (for example, in Europe). This geographical cluster-based observation gives us a first insight into the relationship between globalization and U.S. influence in the film industry, but I think it would be interesting to consider another method of clustering the countries to better understand the link between the two.
>
>I have an idea, students! We’ve seen that the volume of film production in a country can be an indicator of its integration into globalization. Let’s cluster our countries based on two features: the number of films produced by the country and the U.S. influence score.
>
>For this, I suggest using KMeans clustering (after standardizing the features, of course).
By using the silhouette score, we identify 3 main clusters:

<div style="width: 100%;display: flex; justify-content: center;">
  {% include silhouette_score.html %}
</div>


<div style="width: 100%;display: flex; justify-content: center;">
  {% include Kmeans.html %}
</div>

>**Cluster 1: The Discreet Independents**\\
>These countries produce few films and show low American influence in their productions. They are the "cinema craftsmen" who often prefer local stories, narratives rooted in their culture, or low-budget projects. They stand out for their creative independence and a lack of Hollywood themes or styles. In these countries, cinema is sometimes more of a means of cultural expression than a mass industry.
>
>**Cluster 2: The Balanced Explorers**\\
>Countries in this cluster produce a moderate number of films and show a more noticeable American influence, but not a dominant one. They fall into an intermediate zone where their cinema blends local and global elements. One could say these countries explore "cultural bridges": their productions strike a balance between telling local stories and borrowing codes or inspiration from the American film industry. This leads to a diversity of creative approaches, often appreciated on the international stage.
>
>**Cluster 3: The Budding Hollywoods**\\
>Here, we find the major film producers heavily marked by American influence. These countries are followers of the "blockbuster" style with themes, techniques, and sometimes even actors or directors directly inspired by Hollywood. These film industries aim to compete with the United States on the global stage by combining commercial ambition with wide accessibility for an international audience.
>
>
>Let’s observe the distribution of these clusters across the world’s regions.

<div style="width: 100%;display: flex; justify-content: center;">
  {% include Cluster_Wregion.html %}
</div>

>Well, all these observations are very interesting, but now it's time to answer our dear Intello. Here, I’ve compared the clusters we've identified with an official globalization indicator. For this, we will use the Made in Switzerland indicator from ETH Zurich, the KOF.

<div style="width: 100%;display: flex; justify-content: center;">
  {% include Map_cluster.html %}
</div>

<div style="width: 100%;display: flex; justify-content: center;">
  {% include Index_Map.html %}
</div>

**Jason the Troublemaker:**
>Sir, you said that globalization includes cultural exchanges, but I don’t understand. Culture isn’t exchanged like money! It doesn’t make sense…

**Professor:**
>That’s a great point, Jason. It’s true that cultural exchange is less obvious to grasp than economic exchange. But you know me, I’m going to give you a concrete example. Tell me, Jason, what’s your favorite movie character?

**Jason:**
>James Bond, sir. He’s so cool!

**Professor:** 
>I agree, Jason, James Bond has an unmatched style. But you know, he’s also a great example of cultural exchange. Through the 007 films, the British convey elements of their culture: their dry humor, their love of tea, their elegance, and even a unique vision of spies. And what’s fascinating is that these elements become more familiar and acceptable to us because they are carried by a character we admire.\\
>In other words, through characters like James Bond, British cultural aspects travel and integrate into our collective representations. It’s as if, without realizing it, we “adopt” a part of that culture. That’s why movie characters are such a great starting point to study cultural exchanges between countries. What do you think, Jason?

**Jason:** 
>I see what you mean now, sir. I’m listening.

**Professor:** 
>Very well, let’s talk about characters! To quantify cultural exchanges between countries, here’s what I propose: we will assign each character an origin country, that is, the culture they come from. Then, we will analyze in which other countries’ films that character appears. This will allow us to measure how well a country is able to transmit its culture through its characters.\\
>In other words, the more a character from a specific culture appears in productions from other countries, the more it shows the cultural influence of that country around the world. Simple, right?


<div style="width: 100%;display: flex; justify-content: center;">
  {% include Distribution_character.html %}
</div>

>Very well, let’s continue! We have identified 970 characters appearing in multiple films. On average, these characters participate in productions from 1.8 different countries, with a maximum of 8 countries for some.\\
>However, for this analysis, we are only interested in the 428 characters that appear in productions from different countries. For each country that has produced a film featuring a given character, we assign 1 character influence point to the character’s country of origin. This gives us a total of 774 points to distribute.
>
>Let’s get to the heart of the matter: how do we assign an origin country to a character? A simple, yet naive, approach would be to say that a character’s country of origin is the one from the first film they appear in. Let’s see what this gives us for the most popular character: Cardinal Richelieu.
>
>A historical and cultural figure par excellence in France, according to this logic, he would become a Hispanic-American-English character. You see the problem. 

<img src="assets/img/cardinal.jpg" alt="Fullscreen Image" style="max-width: 20%; display: block; margin: 0 auto; height: auto;">

>We need to think this through, kids. To overcome these inconsistencies, we will reuse the zero-shot classification method, which we previously used to analyze the cultural influence of the United States through movie summaries. This time, we’ll apply it directly to the characters.
>
>In practice, we submit the name of each character to an NLP model that assigns a score to several labels representing different countries. The country with the highest score then becomes the character’s country of origin.
>
>By using this method, we can move beyond the limitations of naive approaches and provide a more precise and coherent analysis, relying on natural language processing models capable of capturing nuances that are sometimes invisible to the human eye.
>
>I know, kids, this involves a lot of techniques. But trust me, it’s worth it!
Now, let’s determine where the most influential characters come from! The horizontal bar plot below shows the evolution of the countries that are the origin of the most influential characters. Each unit represents one character influence point.

<div style="width: 100%;display: flex; justify-content: center;">
  {% include Top10_character.html %}
</div>

>Phew, we almost saw a rise in the United States' influence in the 2000s! But the British still hold the lead with a total of 283 character influence points, closely followed by the United States with 274 points. Far behind, Canada has accumulated 34 points. 
>
>Thanks to James Bond, who appears in productions from 6 different countries!

<img src="assets/img/james.jpg" alt="Fullscreen Image" style="max-width: 40%; display: block; margin: 0 auto; height: auto;">

**Professor:** 
>But I know you, you're curious! You want to know which movie characters are the most influential? Here's a top 4 of characters who appear in productions from more than 6 different countries.

(Podium image)

>As you can see, we've found the real Cardinal Richelieu, thanks to NLP!
>
>Professor: Ah, Count Dracula, one of the most iconic characters in literature and cinema. He has been attributed to Romania, his country of origin, and for good reason: the vampire myth finds its roots in the legends of Transylvania, a historical region of Romania.
>
>Mina Harker, although she appears in Dracula, is undeniably British. She was born and raised in England, embodies Victorian values, and her actions in the story, as well as her role as Jonathan Harker’s wife, fit into a distinctly British cultural framework.
>
>Finally, let’s talk about Oliver Twist, the hero of Charles Dickens' famous novel. Again, the United Kingdom is the obvious choice. Indeed, Oliver Twist, a young orphaned boy, is a symbol of the harsh realities of industrial England.


# III/ Population {#part-3}

Population globalization involves the movement and interaction of people across borders, leading to demographic changes and multicultural societies.

**Professor:** 
>In this last part of the class, we will discuss how globalization impacts populations.

**Jason the Troublemaker:** 
>Does it mean that countries exchange their inhabitants like they exchange products? That seems a bit strange…

**Professor:** 
>Indeed, that would be strange! But it’s not exactly what I meant. As the world becomes more global, it becomes easier for people to migrate or travel to different countries. Let’s take a look at the figure below. In this figure, each bar represents the number of actors in a single year, and the different colors show the country of origin of the actors. There is also a normalized version that displays the percentages of each country of origin within the total number of actors.

<div style="width: 100%;display: flex; justify-content: center;">
  {% include proportion_ethnicity.html %}
</div>

**Professor:** 
>This graph conveys two pieces of information. First, if we look at the original version, we can see that the overall number of actors has increased over time, which aligns with the increase observed in the number of movies. Second, when we look at the normalized version, we notice that some countries represent an increasingly important proportion of actors, such as India, China, and South Korea. Meanwhile, others have seen their proportion decrease, like the United States and Canada.

**Intellectual:** 
>Excuse me, sir, but there’s something I don’t quite understand! It seems that this histogram, on its own, is more of an indicator of the development of countries than of their globalization. It shows that the main players in the movie industry have shifted—from Northern countries to Southern countries—but it doesn’t provide direct information about globalization.

**Professor:** 
>You are absolutely correct! To visualize globalization, we must show that these increasing numbers of ethnicities do not exist in isolation but rather participate together in common movies. To demonstrate this, let’s examine the evolution of diversity in films. Jason, can you describe the following graph?

<div style="width: 100%;display: flex; justify-content: center;">
  {% include average_ethnicity_per_movie.html %}
</div>

**Jason:** 
>We can see a blue curve that rises, with light blue lines around it. The lines also get bigger over time. But what do they represent?

**Professor:** 
>Good observation, Jason! The blue curve represents the average number of ethnicities per movie, and you can see how it evolves over time—it increases. The light blue lines indicate the standard deviations. Overall, the mean number of ethnicities per movie has increased! The increasing size of the standard deviation means that some movies are becoming very diverse in terms of actor origin, while others remain much less diversified.

**Intellectual:** 
>So, if we link both graphs, we can observe that actors come from increasingly diverse origins and that these diverse origins are increasingly mixed within movies. This demonstrates that globalization also affects populations. Did I get that right?

**Professor:** 
>Yes, that’s exactly what I wanted you to understand. Well done! Now let’s examine another fascinating aspect: international careers. Can you name an actor you like?

**Jason the Troublemaker:** 
>Jackie Chan!*

**Professor:** 
>Excellent example. Jackie Chan originates from Hong Kong but has acted in movies produced by the United States, France, China, India, and other countries. This is an example of an international career made possible by globalization! Now, take a look at this map. When two countries are connected by a line, it means that an actor has worked in both countries. The width of the line represents the number of actors. This map is cumulative, meaning it shows the accumulation of countries involved in international careers over time.

<div style="width: 100%;display: flex; justify-content: center;">
  {% include international_careers.html %}
</div>

**Professor:** 
>If you look at the map in 1910, only a few countries are connected. This indicates that actors with international careers originated from and moved to a very limited number of countries. Most of them stayed within countries that share the same language, such as the USA, Great Britain, and Australia, or Argentina and Spain. Others moved to colonies of their home country, such as Great Britain and India. At this time, most involved countries were from the Global North—rich, developed nations (and their colonies).
>
>As time passes, you’ll notice that the number of countries involved in international careers increases, reflecting a growing inclusion of populations in the globalization process. Additionally, the diversity of links between countries expands: the possibilities for international careers become much broader! By 2013, almost all countries were involved in the process, except for many African countries, some Middle Eastern countries, and parts of Central Asia.
>
>Now, let’s compare these results with the **KOF Globalization Index (KOFGI)**. The KOF Globalization Index measures the overall extent of globalization in a country, encompassing economic, social, and political dimensions. It captures the integration of economies, international interactions, and the exchange of ideas and information across borders.

<div style="width: 100%;display: flex; justify-content: center;">
  {% include map_kof.html %}
</div>

>When comparing the two maps, we can observe similarities. Countries strongly involved in international careers, such as the USA and Australia, have high KOF indexes (yellowish on the map), while countries like Chad and Afghanistan, which are not involved in international careers, have low indexes (purple on the map).



# Conclusion {#conclusion}

aa
a


a
a

a






a


a
a


a

a

a



a


a


a
a
a

a

