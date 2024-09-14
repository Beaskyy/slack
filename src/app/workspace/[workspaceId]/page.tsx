interface WorkspaceIdPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkSpaceIdPage = ({ params }: WorkspaceIdPageProps) => {
  return <div>Id: {params.workspaceId }</div>;
};

export default WorkSpaceIdPage;
