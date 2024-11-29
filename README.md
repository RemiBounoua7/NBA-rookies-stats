# NBA-rookies-stats

Hello,
This is a personnal project I made to answer a question that kept me awake at night : can we predict NBA players' success by looking at their Rookie year stats ?
This repository contains all the data, scripts and visualizations I made in order to come to a final result, along with this file that will detail my thought process, the choices I made and present the conclusions I arrived at.

## Introduction

First of all, I wanted to define a characteristic, a feature, a label to put on to NBA players, to asses whether or not their careers were successful.
This is not an easy question, as pro players careers are unique and success can't be measured so easily. I didn't want to spend too much time finding the perfect measure, since it probably doesn't exist, so I went with the easy one : career length. The average NBA player career lasts 4.5 years. So our label, for successful player, will be 5Y, aka True if the player played >5 years in the league, and False if not.

Now we can go into details about what has an impact on this label we put to all players, limiting ourselves to the Rookie statline and characteristics of the player in that exact time frame.

### NBA Rookies ages per year

Since we focus on rookie years, I felt I had to take age into account. Indeed, I know from my little understanding of the NBA world, that age is a big factor when it comes to selecting and then playing a rookie. It also acts as a filter 

Graph, explanation about the graph, quick little story about 1976.
<div class='tableauPlaceholder' id='viz1732882322213' style='position: relative'><noscript><a  target="_blank" rel="noopener noreferrer" href='https://public.tableau.com/views/NBATeamsdraftyoungerandyounger/Sheet2?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'><img alt='NBA teams draft younger and younger ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;NB&#47;NBATeamsdraftyoungerandyounger&#47;Sheet2&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='NBATeamsdraftyoungerandyounger&#47;Sheet2' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;NB&#47;NBATeamsdraftyoungerandyounger&#47;Sheet2&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object></div>



### NBA teams drafting loyal/good players
Graph, explanation of the graph and the measures shown, quick little explanation on how to use the interactive functions

### AI Model predicting the 5Y label for 2020+ draftees
Explanation of the model chosen, the training data and process.
Story about the examples and (if possible) make the viewer experience it with a draftee of their choice (with the table I already made)
Like, 'you wanna know what the model says for Victor ? or Cade Cunningham ?' Here it is
Or, Here is a list of the rookies since 2020 (not including 2024 bc they don't have a full season played) : Choose one player and see the model prediction.


## Conclusion
Results explained, question answered or not ? 
Critiques of the work, what could have been done better ? What this piece of work lacks ?

TY goodbye etc
