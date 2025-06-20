<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Simulated attendance records
$attendanceRecords = [
    "2025-06-17" => [
        "timeIn" => "07:36 AM",
        "timeOut" => "05:07 PM",
        "task" => "Completed user authentication module",
        "accomplishment" => "Implemented a complete notification system that alerts users in real time about important updates, such as new announcements, task deadlines, and schedule changes. Built the backend API to handle notification creation, retrieval, and status updates, and connected it to the frontend using Angular services. Integrated badge counters and toast alerts to notify users instantly. Designed the notification panel to display messages chronologically with read/unread indicators and ensured the system works efficiently for both student and admin roles, with automatic syncing and minimal load impact."
    ],
    "2025-06-16" => [
        "timeIn" => "07:46 AM",
        "timeOut" => "05:32 PM",
        "task" => "Built database schema for attendance tracking",
        "accomplishment" => "Successfully integrated both login and registration APIs into the application, allowing users to securely sign up and log in with real-time validation, error handling, and smooth navigation between authentication states. Implemented client-side form validation, connected the forms to the backend using Angular services, and ensured secure transmission of user credentials through HTTPS. Verified proper storage and retrieval of user data from the MySQL database, and handled all edge cases such as duplicate accounts, incorrect passwords, and missing fields. Also added toast messages for user feedback and ensured compatibility with mobile and desktop views."
    ],
    "2025-06-15" => [
        "timeIn" => "07:59 AM",
        "timeOut" => "06:32 PM",
        "task" => "Started backend API setup",
        "accomplishment" => "Designed and implemented a dynamic user dashboard that displays personalized data such as upcoming tasks, recent announcements, and quick-access links based on the user's role. Integrated multiple API endpoints to fetch real-time data from the server and rendered them using Angular components with proper loading states and error handling. Applied responsive CSS and Ionic UI components to ensure the dashboard adapts seamlessly to various screen sizes. Added support for dark mode, user profile customization, and interactive elements such as collapsible sections and refresh controls for an enhanced user experience."
    ],
    "2025-06-14" => [
        "timeIn" => "08:05 AM",
        "timeOut" => "05:47 PM",
        "task" => "Developed user authentication module",
        "accomplishment" => "Successfully developed and integrated a full-featured user authentication module into the application using a combination of Angular for the frontend, PHP for the backend, and MySQL for the database layer. Created dedicated API endpoints for both user registration and login, ensuring each request is validated and sanitized to prevent SQL injection, XSS, and other security vulnerabilities. Implemented client-side form validation with Angular Reactive Forms to provide immediate feedback on input errors and guide users through the process seamlessly. Integrated JSON Web Token (JWT) authentication for managing user sessions securely and used route guards to restrict access to protected pages based on user login state. Built middleware in the backend to verify and decode tokens on every protected request. Added token expiration handling with auto-logout and token refresh features for enhanced security. Designed custom error responses and toast notifications for various edge cases such as incorrect credentials, deactivated accounts, and duplicate emails. Conducted extensive testing on different devices and browsers to ensure compatibility and responsiveness. Ensured the entire authentication system was modular, maintainable, and scalable for future features such as multi-role access, password reset, and two-factor authentication."
    ],
    "2025-06-13" => [
        "timeIn" => "08:12 AM",
        "timeOut" => "06:15 PM",
        "task" => "Implemented task management module",
        "accomplishment" => "Successfully designed and developed a robust task management module that allows users to create, update, delete, and retrieve tasks through a clean and responsive user interface. Built RESTful API endpoints in PHP for handling all CRUD operations, with each endpoint protected by JWT authentication to ensure secure access. Incorporated data validation on both the backend and frontend to prevent invalid inputs and ensure data integrity. On the frontend, created reusable Angular components to handle task listing, filtering, sorting, and dynamic searching. Implemented custom modals and reactive forms for editing and adding tasks with real-time validation and feedback. Enhanced user experience by integrating status indicators, deadline color-coding, and priority tags, all styled consistently using Ionic components. Added loading spinners and toast messages for visual feedback during asynchronous operations. Built an activity log to track changes made to each task and timestamp actions for accountability. Ensured the module supported both mobile and desktop screen sizes, with responsive layouts and adaptive interactions. Finally, conducted extensive manual testing and debugged edge cases involving date conflicts, missing fields, and offline submission retries, preparing the module for real-world usage and potential scaling."
    ]

];

// Check if 'date' is provided
if (isset($_GET['date'])) {
    $date = $_GET['date'];

    if (isset($attendanceRecords[$date])) {
        echo json_encode([
            "date" => $date,
            "details" => $attendanceRecords[$date]
        ]);
    } else {
        echo json_encode([
            "date" => $date,
            "message" => "No attendance record found."
        ]);
    }
} else {
    // No date given → return all records
    $allRecords = [];

    foreach ($attendanceRecords as $date => $details) {
        $allRecords[] = array_merge(["date" => $date], $details);
    }

    echo json_encode([
        "records" => $allRecords
    ]);
}
