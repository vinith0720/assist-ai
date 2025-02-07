import Sidebar from "@/app/ui/sidebar";
import Chat from "@/app/ui/chat";
import { conversation } from "../lib/data";

export default function Home() {
  return (
    <main>
      <div className="h-screen w-[250px] fixed">
        <Sidebar userId={conversation.user_id} />
      </div>
      <div className="ml-[250px] h-screen overflow-y-hidden">
       <Chat conversationId=""/> 
      </div>
    </main>
  );
}
