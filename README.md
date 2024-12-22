# Heart-Risk-Score-wHACKiest2024

Welcome to **Heart-Risk-Score-wHACKiest2024** — an advanced full-stack application that assesses heart risk based on ECG data and user-provided parameters. By leveraging machine learning, we offer real-time ECG data analysis and personalized heart risk scores with a remarkable **88% model accuracy** and **AUC of 0.95**.

Our system simplifies the process: **ECG data is automatically retrieved via an API**, and users only need to input **static parameters** such as blood pressure and other relevant health metrics that cannot be derived from the ECG.

## 🚀 Features

- **Frontend**
  - **Interactive Login & Navbar**: Seamless authentication and intuitive navigation for a smooth user experience.
  - **Real-time ECG Data Plotting**: The application visualizes ECG data dynamically, providing a clear graphical representation of heart rhythm.
  - **Dashboard**: A central hub where users can upload their blood pressure (BP) and other static health parameters, and view their ECG data and risk score.
  - **Heart Risk Score**: An immediate heart risk score based on the combination of ECG data and user-inputted parameters, powered by cutting-edge machine learning.

- **Backend**
  - **Flask API**: A powerful backend API that retrieves ECG data and processes user input for risk score prediction.
  - **Machine Learning Integration**: The backend leverages the machine learning model to generate accurate risk predictions based on both ECG data and static health parameters.
  - **Data Storage**: Efficient and secure storage of ECG data and user-provided parameters.

## 🧠 Tech Stack

- **Frontend**:
  - HTML/CSS/JavaScript
  - React.js 
  - Chart.js for dynamic ECG visualizations

- **Backend**:
  - Python
  - Flask for building the API

- **Machine Learning**:
  - Python (scikit-learn)
  - **Model Performance**: With an **88% accuracy** and an **AUC of 0.95**, our model accurately predicts heart risk based on ECG and additional parameters.

## 💡 How It Works

1. **Login**: Users begin by securely logging into the platform.
2. **ECG Data Fetching**: The system automatically retrieves ECG data through an integrated API.
3. **Input Static Parameters**: Users enter health parameters such as blood pressure (BP), age, gender, and other metrics that are relevant for heart risk analysis.
4. **ECG Visualization**: The system visualizes the retrieved ECG data for the user to analyze.
5. **Risk Score Generation**: The combination of ECG data and user-provided static parameters is sent to the backend, where the machine learning model calculates a personalized heart risk score.
6. **Display Risk Score**: The final risk score, along with additional insights, is displayed on the dashboard.

## 🔥 Model Performance

We have rigorously trained and fine-tuned our machine learning model to process both ECG data and static parameters, achieving an **88% accuracy** and a **0.95 AUC**. This model ensures reliable and actionable heart risk predictions. Key steps include:

- **Data Preprocessing**: Cleaning and preparing ECG data, as well as validating and normalizing static parameters for accurate model input.
- **Feature Extraction**: Extracting crucial features from ECG data and incorporating user-provided parameters such as BP and other health metrics.
- **Risk Prediction**: The model calculates the risk score based on this rich data input, providing an accurate assessment of the user’s heart health.

## 👥 Team Roles and Contributors

### Core Team

- **Backend Developer**: [Swanand Gadwe]  
  Developed the backend API, integrated the machine learning model, ensured smooth communication between the frontend and backend, and also trained the machine learning model to achieve an **88% accuracy** and **AUC of 0.95** for heart risk prediction.

- **Frontend Developers**:  
  - **[Shashwath Prabhu]**: Designed and developed the user interface, emphasizing an intuitive and seamless experience for visualizing ECG data and heart risk scores, ensuring optimal user interaction.  
  - **[Vedang Srivastava]**: Played a key role in creating responsive and interactive UI components, making sure that the data is presented clearly and is easily accessible for the users.  
  - **[Roshan Sharma]**: Focused on refining the overall user journey, ensuring smooth navigation and enhancing the visual appeal of ECG data plots and risk score displays.

