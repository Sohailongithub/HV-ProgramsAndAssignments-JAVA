package JAVA_OOPs;

public class Visitor {
    String name;
    int age;
    String phoneNumber;
    private String appointmentDate;
    private String appointmentTimeSlot;

    // Constructor
    public Visitor(String name, int age, String phoneNumber) {
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.appointmentDate = "";
        this.appointmentTimeSlot = "";
    }

    // Getter and Setter methods
    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getAppointmentDate() {
        return appointmentDate;
    }

    public void setAppointmentDate(String appointmentDate) {
        this.appointmentDate = appointmentDate;
    }

    public String getAppointmentTimeSlot() {
        return appointmentTimeSlot;
    }

    public void setAppointmentTimeSlot(String appointmentTimeSlot) {
        this.appointmentTimeSlot = appointmentTimeSlot;
    }
}
