"use client";
import { useEffect, useState } from "react";
import {
  RealtimeKitProvider,
  useRealtimeKitClient,
} from "@cloudflare/realtimekit-react";
import { useParams } from "next/navigation";
import {
  RtkAiToggle,
  RtkCameraSelector,
  RtkControlbar,
  RtkDialogManager,
  RtkEndedScreen,
  RtkGrid,
  RtkHeader,
  RtkMeetingTitle,
  RtkNotifications,
  RtkParticipants,
  RtkParticipantsAudio,
  RtkSetupScreen,
  RtkSidebar,
  RtkSpotlightGrid,
  RtkStage,
  RtkUiProvider,
  RtkWaitingScreen,
  States,
} from "@cloudflare/realtimekit-react-ui";

const MeetingPage = () => {
  const { slug: token } = useParams<{ slug: string }>();
  const [meeting, initMeeting] = useRealtimeKitClient();
  const [currentState, setCurrentState] = useState("idle");
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    initMeeting({
      authToken: token,
      defaults: { audio: true, video: true },
    });
  }, []);

  const renderSetupScreen = () => {
    return <RtkSetupScreen />;
  };

  const renderWaitingScreen = () => {
    return <RtkWaitingScreen />;
  };

  const renderEndedScreen = () => {
    return <RtkEndedScreen />;
  };

  const loading = () => {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-100px)]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4" />
          <p>Joining meeting...</p>
        </div>
      </div>
    );
  };

  const renderJoinedScreen = () => {
    return (
      <>
        <RtkHeader
          style={{ display: "flex", justifyContent: "space-between" }}
        />
        <RtkStage style={{ flex: 1, flexGrow: 1, flexShrink: 1 }}>
          <RtkGrid />
          <RtkSidebar
            style={{
              position: "fixed",
              top: "0px",
              display: showSidebar ? "block" : "none",
            }}
          />
        </RtkStage>
        <RtkControlbar
          style={{ display: "flex", justifyContent: "space-between" }}
        />
      </>
    );
  };

  const handleStatesUpdate = (event: { detail: States }) => {
    const meetingState = event.detail.meeting;
    const states = event.detail;

    // Store states to update your custom UI
    if (meetingState === "idle" && currentState !== "idle") {
      setCurrentState("idle");
    } else if (meetingState === "setup" && currentState !== "setup") {
      setCurrentState("setup");
    } else if (meetingState === "waiting" && currentState !== "waiting") {
      setCurrentState("waiting");
    } else if (meetingState === "joined" && currentState !== "joined") {
      setCurrentState("joined");
    } else if (meetingState === "ended" && currentState !== "ended") {
      setCurrentState("ended");
    }

    // Update sidebar visibility based on state
    if (states.activeSidebar !== undefined) {
      setShowSidebar(states.activeSidebar);
    }
  };

  return (
    <div>
      <RealtimeKitProvider value={meeting}>
        <RtkUiProvider
          meeting={meeting}
          showSetupScreen={true}
          onRtkStatesUpdate={handleStatesUpdate}
          style={{
            display: "flex",
            flexDirection: "column",
            margin: 0,
            height: "100vh",
          }}
        >
          <div
            id="meeting-container"
            style={
              {
                // display: "flex",
                // flexDirection: "column",
                // flex: 1,
                // flexGrow: 1,
                // flexShrink: 1,
              }
            }
          >
            {currentState === "idle" && loading()}
            {currentState === "setup" && renderSetupScreen()}
            {currentState === "waiting" && renderWaitingScreen()}
            {currentState === "joined" && renderJoinedScreen()}
            {currentState === "ended" && renderEndedScreen()}
          </div>
          <RtkParticipantsAudio meeting={meeting} />
          <RtkDialogManager meeting={meeting} />
          <RtkNotifications meeting={meeting} />
          <RtkAiToggle meeting={meeting} />
          <RtkMeetingTitle meeting={meeting} />
        </RtkUiProvider>
      </RealtimeKitProvider>
    </div>
  );
};

export default MeetingPage;
