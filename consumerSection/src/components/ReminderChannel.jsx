import AddReminderChannels from "./AddReminderChannel";
import Breadcrumb from "./BreadCrump";
const REMINDER_CHANNELS = [
  { title: "SMS", channel: "Mobile Number", isActive: true },
  { title: "WhatsApp", channel: "WhatsApp Number", isActive: true },
  { title: "Call", channel: "Mobile Number", isActive: true },
  { title: "Email", channel: "Email ID", isActive: true },
  {
    title: "Facebook Messenger",
    channel: "",
    isActive: false,
    btnLabel: "Add Account",
  },
  { title: "Instagram", channel: "", isActive: false, btnLabel: "Add Account" },
  {
    title: "Google Calendar",
    channel: "",
    isActive: false,
    btnLabel: "Add Account",
  },
];

const ReminderChannel = () => {
  return (
    <section
      className={`mx-auto mb-5 flex justify-center items-center flex-col  min-h-full max-w-7xl   gap-[1.9rem] rounded-xl  px-5  py-4`}
    >
      <Breadcrumb
        list={["Routine", "Add New Routine", "Add Reminder Channels"]}
      />
      <div className="flex w-full flex-col gap-10 rounded-xl bg-white  py-4 lg:pr-16 border">

        <div className="font-poppins text-[22px] text-black border-b px-5">
          Add Reminder Channels
        </div>

        <div className="flex flex-col gap-7 p-5">
          
          <div className="font-poppins text-[18px] text-black">
            Active Channels
          </div>

          <div className="flex flex-wrap gap-9">
            {REMINDER_CHANNELS.map((item) => (
              <div key={item.title} className="w-full sm:w-fit">
                {item.isActive && (
                  <div key={item.title} className="w-full sm:w-fit xl:mr-5">
                    <AddReminderChannels
                      title={item.title}
                      channel={item.channel}
                      isActive={item.isActive}
                      btnLabel={item.btnLabel}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-7">
            <div className="font-poppins text-[18px] text-black">
              Inactive Channels
            </div>
            <div className="flex flex-wrap gap-9">
              {REMINDER_CHANNELS.map((item) => (
                <div
                  key={item.title}
                  className={`w-full sm:w-fit ${!item.isActive ? "" : "hidden"}`}
                >
                  {!item.isActive && (
                    <div key={item.title} className="w-full sm:w-fit xl:mr-5">
                      <AddReminderChannels
                        title={item.title}
                        channel={item.channel}
                        isActive={item.isActive}
                        btnLabel={item.btnLabel}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReminderChannel;