"use client";
import { useEffect, useState } from "react";
import { useRealtimeKitClient } from "@cloudflare/realtimekit-react";
import { useParams } from "next/navigation";
import {
  RtkGrid,
  RtkGridPagination,
  RtkMeeting,
  RtkParticipantCount,
  RtkParticipants,
  RtkSimpleGrid,
} from "@cloudflare/realtimekit-react-ui";
import { generateError } from "@/lib/utils";

const MeetingPage = () => {
  const { slug: token } = useParams<{ slug: string }>();
  const [meeting, initMeeting] = useRealtimeKitClient();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const joinMeeting = async () => {
      try {
        setIsLoading(true);

        // Initialize meeting first
        const meet = await initMeeting({
          authToken: decodeURIComponent(token),
          defaults: {
            audio: true,
            video: true,
          },
        });

        if (!meet) {
          throw new Error("Failed to initialize meeting");
        }

        // // Wait for initialization then join
        // await meet?.join();
        // await meet?.self?.enableAudio();
        // await meet?.self?.enableVideo();

        setIsLoading(false);
      } catch (err) {
        console.error("Meeting join error:", err);
        setError(generateError(error));
        setIsLoading(false);
      }
    };

    if (token && !meeting) {
      joinMeeting();
    }

    // Cleanup on unmount
    return () => {
      if (meeting) {
        meeting.leave();
      }
    };
  }, [token, initMeeting]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4" />
          <p>Joining meeting...</p>
        </div>
      </div>
    );
  }

  if (error && !isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-red-900/30 border border-red-600 rounded-lg p-6 max-w-md">
          <h2 className="text-xl font-bold mb-2">Failed to Join</h2>
          <p className="text-gray-300">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col">
      <RtkMeeting showSetupScreen={true} mode="fill" meeting={meeting} />
      <div className="absolute top-4 right-4 z-10">
        <RtkParticipants meeting={meeting} />
        <RtkParticipantCount meeting={meeting} />
        <RtkGridPagination meeting={meeting} />
      </div>
    </div>
  );
};

export default MeetingPage;
