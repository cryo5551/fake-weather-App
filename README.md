## Weather-App

### Hosted Link:

### Please Note that, If the funcnality is not working please cheak console there will be appropriate responce/reason for that.

### UI layout Structure:

![Screenshot (40)](https://user-images.githubusercontent.com/96884049/211297347-014a243e-9e81-4646-bf28-75347a84e124.png)


- There are two tables here:
- Single column "City List" table on the left
- 6 column "Details" table
- The following elements in the layout are clickable buttons:
- "Get Weather"
- "Search"
- If no data is present in the table, display "No Data Available" as above


### User Interaction and Flow:
- The user clicks on the “Get Weather” button
- The web app highlights the first row in the “City list” table (see below, the highlight
is the green border)
- Weather information is fetched and inserted into the table as per the figure below
- The web app then highlights the next city and then performs steps 2 to 4.
- The Description field is a text input and is hence editable by the user
- The value of Data age is calculated as "(Current date time - data_and_time) " and
expressed in hours
- Everytime a city's weather information is fetched, a new row is added to the
"Details" table (see the figure below)

![Screenshot (41)](https://user-images.githubusercontent.com/96884049/211297706-e4a7a33b-a969-476f-b62f-a4e3f3531d74.png)


### Additional Functionality:
- Clicking the Delete button will delete the data from row and loacal storage.
- Table data should be stored in a dictionary / JS object as and when rows are
added in the table.
- "Search": The user enters a city name in the search input box and clicks on the
Search button. 
- If the city name is present in the Details table, that row is
highlighted in yellow color for 3 seconds(As shown in the figure above).
