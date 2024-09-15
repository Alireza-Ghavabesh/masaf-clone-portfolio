import { useState, useRef } from 'react';

const AudioPlayer = () => {
    const [filename, setFilename] = useState('your-audio-file.mp3'); // Replace with your dynamic filename
    const audioRef = useRef(null);

    const handlePlay = async () => {
        try {
            const response = await fetch('/api/stream-audio', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ filename }),
            });

            if (response.ok) {
                const url = `http://localhost:8000/stream/audio/${filename}`;
                audioRef.current.src = url;
                audioRef.current.play();
            } else {
                console.error('Failed to fetch audio');
            }
        } catch (error) {
            console.error('Error fetching audio:', error);
        }
    };

    return (
        <div>
            <audio ref={audioRef} className='w-full px-4' controls onPlay={handlePlay}>
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default AudioPlayer;