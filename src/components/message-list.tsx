import { GetMessagesReturnType } from "@/features/messages/api/use-get-message";

interface MessageListProps {
  memberName?: string;
  messageImage?: string;
  channelName?: string;
  channelCreationTime?: number;
  variant?: "channel" | "thread" | "conversation";
  data: GetMessagesReturnType | undefined;
  loadMore: () => void;
  isLoadingMore: boolean;
  canLoadMore: boolean;
}

export const MessageList = ({
  memberName,
  messageImage,
  channelName,
  channelCreationTime,
  data,
  variant,
  loadMore,
  isLoadingMore,
  canLoadMore,
}: MessageListProps) => {
  return (
    <div className="flex-1 flex flex-col-reverse pb-4 overflow-y-auto messages-scrollbar">
      {data?.map((message) => <div>{JSON.stringify(message)}</div>)}
    </div>
  );
};
