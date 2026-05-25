// Premiere Pro ExtendScript methods
// This file runs inside Premiere Pro's ExtendScript engine, NOT the UXP browser context.

$._AISubtitleStudio = {
    
    /**
     * Retrieves the name of the currently active sequence.
     * Returns a string, or an error message if no sequence is active.
     */
    getActiveSequenceName: function() {
        var seq = app.project.activeSequence;
        if (seq) {
            return seq.name;
        } else {
            return "No active sequence found.";
        }
    },

    /**
     * Simulates extracting audio from the active sequence.
     * In a full implementation, this would use the Adobe Media Encoder (AME) 
     * to render the active sequence to a .wav or .mp3 file in a temp directory.
     */
    exportAudio: function() {
        var seq = app.project.activeSequence;
        if (!seq) {
            return JSON.stringify({ error: "No active sequence to export audio from." });
        }
        
        // Mocking the export process for now.
        // In reality, you would use:
        // var outputPath = Folder.temp.fsName + "/temp_audio.wav";
        // var eprPath = "...path to preset...";
        // app.encoder.encodeSequence(seq, outputPath, eprPath, 0, 1);
        
        var mockAudioPath = "/tmp/mock_audio_export.wav"; // Mock path
        return JSON.stringify({ success: true, audioPath: mockAudioPath, sequenceName: seq.name });
    },

    /**
     * Imports an .srt file into the Premiere Pro project and inserts it into the active sequence.
     * @param {string} srtFilePath - The absolute path to the .srt file on the system.
     */
    importSubtitles: function(srtFilePath) {
        var project = app.project;
        var seq = project.activeSequence;
        
        if (!seq) {
            return JSON.stringify({ error: "No active sequence to import subtitles to." });
        }
        
        try {
            // Import the SRT file into the project bin
            var imported = project.importFiles([srtFilePath], true, project.rootItem, false);
            
            // In a complete script, you would search the project bin for the imported file
            // and use seq.videoTracks or caption tracks to insert the clip.
            // Premiere's API for caption tracks is limited in ExtendScript, 
            // so often plugins just import the SRT into the project bin and let the user drag it, 
            // or use specific third-party extensions to place it.
            
            return JSON.stringify({ success: true, message: "Subtitles imported to Project Bin successfully." });
        } catch (e) {
            return JSON.stringify({ error: "Failed to import SRT: " + e.toString() });
        }
    }
};
