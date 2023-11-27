type Props = {};

const AdminHeader = (props: Props) => {
  return (
    <div className="bg-slate-200 flex justify-between items-center py-3 px-10">
      <h1 className="text-2xl font-bold">Welcometo admin website</h1>
      <img
        className="w-[80px]"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Adidas_logo.png/1200px-Adidas_logo.png"
        alt=""
      />
    </div>
  );
};

export default AdminHeader;
