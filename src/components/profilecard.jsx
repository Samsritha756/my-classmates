import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa"; // Import heart icon

// Updated working images for people
const peopleImages = {
    Alice: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg", 
    Bob: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg", 
    Charlie: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" 
};

// Mapping favorite colors
const favoriteColors = {
    Alice: "rgba(255, 0, 0, 0.5)", 
    Bob: "rgba(0, 0, 0, 0.5)", 
    Charlie: "rgba(255, 255, 255, 0.5)" 
};

const ProfileCard = ({ name, favoriteColor }) => {
    const [likes, setLikes] = useState(0);

    // Get the background image for this person
    const personImage = peopleImages[name] || "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg";

    // Get the favorite color as an overlay
    const colorOverlay = favoriteColors[name] || "rgba(0, 0, 0, 0.5)";

    return (
        <Card className="m-3 shadow text-center" style={{ width: "18rem", border: "3px solid black" }}>
            {/* Background Image Section */}
            <div 
                className="card-background"
                style={{
                    backgroundImage: `url(${personImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "250px",
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                    position: "relative"
                }}
            >
                {/* Color Overlay */}
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: colorOverlay
                }} />
            </div>
            
            {/* Card Content */}
            <Card.Body style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", color: "white" }}>
                <Card.Title className="fw-bold">{name}</Card.Title>
                <Card.Text><strong>Favorite Color:</strong> {favoriteColor}</Card.Text>
                <Button variant="danger" onClick={() => setLikes(likes + 1)}>
                    {likes} <FaHeart />
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProfileCard;
