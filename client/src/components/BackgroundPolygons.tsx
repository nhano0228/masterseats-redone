import React from 'react'
import Particles from 'react-particles-js'

const BackgroundPolygons: React.FC = () => {
    return (
        <Particles 
            style={{
                backgroundColor: "#FFCB05",
                position: "absolute",
                height: '100vh',
                width: '100%',
                marginTop: -90,
                paddingTop: 90
            }}
            params={{ 
            "particles": {
                "number": {
                    "value": 160,
                    "density": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "speed": 4,
                        "size_min": 0.3
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "random": true,
                    "speed": 1
                }
            }
        }}/>
    )
}

export default BackgroundPolygons