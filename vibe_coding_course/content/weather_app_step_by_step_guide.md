# Step-by-Step Guide: Building a Weather App with Cursor AI

This guide will walk you through creating a functional weather application using Cursor AI and vibe coding techniques. By the end, you'll have built a practical web application that displays weather information for any location - all without needing to write code manually!

## Prerequisites

Before starting this project, ensure you have:

1. Installed Cursor AI (follow our [Installation Guide](/home/ubuntu/vibe_coding_course/content/cursor_installation_guide.md))
2. Basic familiarity with Cursor's interface (review our [Basics Tutorial](/home/ubuntu/vibe_coding_course/content/cursor_basics_tutorial.md))
3. An internet connection
4. No prior coding experience required!

## Project Overview

We'll be building a weather application with the following features:
- Search for weather by city name
- Display current weather conditions
- Show temperature, humidity, wind speed, and other metrics
- Visual representation of weather conditions
- Clean, user-friendly interface

## Step 1: Setting Up Your Project

1. **Open Cursor AI** and create a new folder for your project.

2. **Create a new file** called `app.py` in your project folder.

3. **Open the Composer** (Ctrl/Cmd+K) and enter the following prompt:
   ```
   I want to create a weather app using Python and Streamlit. The app should allow users to search for a city and display the current weather conditions including temperature, humidity, wind speed, and a description of the weather. Please set up the basic structure of the app with necessary imports and a simple UI.
   ```

4. **Review the generated code** and click "Apply" to add it to your file.

5. The code should include imports for Streamlit and other necessary libraries. It might look something like this:
   ```python
   import streamlit as st
   import requests
   import json
   from datetime import datetime
   
   # Set page configuration
   st.set_page_config(
       page_title="Weather App",
       page_icon="🌤️",
       layout="centered"
   )
   
   # App title and description
   st.title("Weather App")
   st.write("Search for a city to get the current weather conditions")
   
   # Input for city name
   city = st.text_input("Enter city name:", "")
   ```

## Step 2: Adding Weather API Integration

1. **Open the Composer** again and enter this prompt:
   ```
   I need to integrate a free weather API into my app. Please add code to fetch weather data from OpenWeatherMap API when a user enters a city name. The app should display temperature in both Celsius and Fahrenheit, humidity, wind speed, and weather description. Also add error handling for cases when the city is not found or there are API issues.
   ```

2. **Review the generated code** and click "Apply" to add it to your file.

3. The code will include API integration. You'll need to get an API key from OpenWeatherMap:
   - Go to [OpenWeatherMap](https://openweathermap.org/)
   - Sign up for a free account
   - Get your API key from your account dashboard

4. **Replace the API key** in the code with your own key:
   ```python
   # API key for OpenWeatherMap
   api_key = "your_api_key_here"  # Replace with your actual API key
   ```

5. The code should include a function to fetch weather data and display it:
   ```python
   def get_weather_data(city_name, api_key):
       base_url = "http://api.openweathermap.org/data/2.5/weather?"
       complete_url = f"{base_url}q={city_name}&appid={api_key}&units=metric"
       
       response = requests.get(complete_url)
       return response.json()
   ```

## Step 3: Enhancing the User Interface

1. **Open the Composer** and enter this prompt:
   ```
   I want to improve the user interface of my weather app. Please add:
   1. A nice header with a weather icon
   2. A card layout for displaying weather information
   3. Icons for different weather conditions
   4. Color coding based on temperature
   5. A loading spinner while fetching data
   ```

2. **Review the generated code** and click "Apply" to update your file.

3. The enhanced UI code might include:
   ```python
   # Display weather information in a nice card
   def display_weather_card(weather_data):
       # Extract data
       temp_c = weather_data["main"]["temp"]
       temp_f = (temp_c * 9/5) + 32
       humidity = weather_data["main"]["humidity"]
       wind_speed = weather_data["wind"]["speed"]
       description = weather_data["weather"][0]["description"]
       icon_code = weather_data["weather"][0]["icon"]
       
       # Create columns for layout
       col1, col2 = st.columns(2)
       
       with col1:
           st.metric("Temperature", f"{temp_c:.1f}°C / {temp_f:.1f}°F")
           st.metric("Humidity", f"{humidity}%")
       
       with col2:
           st.metric("Wind Speed", f"{wind_speed} m/s")
           st.write(f"**Condition:** {description.capitalize()}")
           st.image(f"http://openweathermap.org/img/wn/{icon_code}@2x.png")
   ```

## Step 4: Adding Additional Features

1. **Open the Composer** and enter this prompt:
   ```
   I'd like to add more features to my weather app:
   1. A 5-day forecast section
   2. The ability to save favorite cities
   3. Display the current date and time for the searched location
   4. A map showing the location
   5. Sunrise and sunset times
   ```

2. **Review the generated code** and click "Apply" to update your file.

3. For the 5-day forecast, you'll need to use a different API endpoint. The code might include:
   ```python
   def get_forecast_data(city_name, api_key):
       base_url = "http://api.openweathermap.org/data/2.5/forecast?"
       complete_url = f"{base_url}q={city_name}&appid={api_key}&units=metric"
       
       response = requests.get(complete_url)
       return response.json()
   ```

4. For displaying the forecast, the code might include:
   ```python
   def display_forecast(forecast_data):
       st.subheader("5-Day Forecast")
       
       # Create columns for each day
       cols = st.columns(5)
       
       # Process and display forecast for next 5 days
       for i, day_data in enumerate(forecast_data["list"][::8][:5]):
           date = datetime.fromtimestamp(day_data["dt"]).strftime("%a")
           temp = day_data["main"]["temp"]
           icon = day_data["weather"][0]["icon"]
           
           with cols[i]:
               st.write(f"**{date}**")
               st.image(f"http://openweathermap.org/img/wn/{icon}@2x.png")
               st.write(f"{temp:.1f}°C")
   ```

## Step 5: Error Handling and User Experience

1. **Open the Composer** and enter this prompt:
   ```
   I want to improve the error handling and user experience of my weather app:
   1. Add clear error messages when a city isn't found
   2. Add a search button in addition to the text input
   3. Remember the last searched city using session state
   4. Add a loading animation while fetching data
   5. Add a footer with credits and information
   ```

2. **Review the generated code** and click "Apply" to update your file.

3. The improved error handling might look like:
   ```python
   # Search button
   if st.button("Get Weather") and city:
       with st.spinner("Fetching weather data..."):
           weather_data = get_weather_data(city, api_key)
           
           if weather_data["cod"] != "404":
               st.session_state.last_city = city
               display_weather_card(weather_data)
               
               # Get and display forecast
               forecast_data = get_forecast_data(city, api_key)
               display_forecast(forecast_data)
           else:
               st.error(f"City '{city}' not found. Please check the spelling and try again.")
   ```

## Step 6: Testing Your Application

1. **Save your `app.py` file**.

2. **Open the Composer** and enter this prompt:
   ```
   How do I run my Streamlit app to test it? Please provide the command and any necessary setup instructions.
   ```

3. **Review the response** which should explain how to run your app.

4. **Open a terminal** in Cursor (Terminal > New Terminal) and run:
   ```bash
   pip install streamlit requests
   streamlit run app.py
   ```

5. **Test your application** by:
   - Entering different city names
   - Checking if weather data displays correctly
   - Testing error handling with invalid city names
   - Verifying that all features work as expected

## Step 7: Enhancing and Customizing

1. **Open the Composer** and enter this prompt:
   ```
   I'd like to customize the appearance of my weather app:
   1. Add a custom color theme
   2. Improve the layout for mobile devices
   3. Add animations for weather conditions
   4. Create a dark/light mode toggle
   5. Add custom CSS for better styling
   ```

2. **Review the generated code** and click "Apply" to update your file.

3. The customization code might include:
   ```python
   # Custom CSS
   st.markdown("""
   <style>
   .main {
       background-color: #f5f5f5;
   }
   .stApp {
       max-width: 800px;
       margin: 0 auto;
   }
   .weather-card {
       background-color: white;
       border-radius: 10px;
       padding: 20px;
       box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
   }
   </style>
   """, unsafe_allow_html=True)
   ```

## Step 8: Deploying Your Weather App

1. **Open the Composer** and enter this prompt:
   ```
   How can I deploy my Streamlit weather app so others can use it? Please provide options and basic instructions.
   ```

2. **Review the response** which should explain deployment options.

3. For a simple deployment using Streamlit Cloud:
   - Create a GitHub repository and push your code
   - Create a `requirements.txt` file with your dependencies
   - Sign up for [Streamlit Cloud](https://streamlit.io/cloud)
   - Connect your GitHub repository
   - Deploy your app with a few clicks

4. Your `requirements.txt` file should include:
   ```
   streamlit
   requests
   ```

## Troubleshooting Common Issues

### API Key Issues
- Ensure your API key is correct
- Check if you've reached the free tier limit
- Verify the API endpoint URLs

### Installation Problems
- Make sure you've installed all required packages
- Check for Python version compatibility
- Restart Cursor if you encounter strange behavior

### Display Issues
- Verify your internet connection for loading icons
- Check Streamlit documentation for layout issues
- Test on different browsers if needed

## Extension Ideas

Once you've completed the basic weather app, consider these enhancements:

1. **Add weather alerts** for severe conditions
2. **Implement geolocation** to automatically detect the user's city
3. **Add historical weather data** with charts and graphs
4. **Create a multi-city comparison** feature
5. **Add air quality information** from another API
6. **Implement weather-based recommendations** (what to wear, activities)

## Conclusion

Congratulations! You've successfully built a functional weather application using Cursor AI and vibe coding techniques. This project demonstrates how AI can help you create useful applications without extensive coding knowledge.

Remember, the key to successful vibe coding is clear communication with the AI. Be specific in your requests, break complex tasks into smaller steps, and iterate based on the results.

Continue exploring and enhancing your weather app, and apply these same techniques to build other projects that interest you!