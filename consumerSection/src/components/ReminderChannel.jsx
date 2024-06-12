import AddReminderChannels from "./AddReminderChannel";
import Breadcrumb from "./BreadCrump";
import Layout from "./Layout";
import HeadingDiv from "./HeadingDiv";
import RoutineInfo from "./RoutineInfo";
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
const breadcrumbItems = [
  { label: "Routine", path: "/routines" },
  { label: "Add Reminder Channel", path: "/routine/create/add-reminder-channels" },
];


const ReminderChannel = () => {
  return (
    <Layout>


      <Breadcrumb data={breadcrumbItems}
      />

      <RoutineInfo heading="what are Reminder Channels? " content="Reminder channels are communication methods through which reminders can be sent, such as SMS, email, Facebook Messenger, Instagram, and more." />
      <HeadingDiv title="Add Reminder Channel">
        <div className="flex flex-col gap-7 p-5">

          <div className="font-poppins text-[18px] text-black">
            Active Channels
          </div>

          <div className="flex flex-wrap gap-9 w-full ">
            {REMINDER_CHANNELS.map((item) => (
              <div key={item.title} className="w-full sm:w-fit">
                {item.isActive && (
                  <div key={item.title} className="w-full sm:w-fit ">
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
                    <div key={item.title} className="w-full sm:w-fit">
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

      </HeadingDiv>

    </Layout>
  );
};

export default ReminderChannel;
