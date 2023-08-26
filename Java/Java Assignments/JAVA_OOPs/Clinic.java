package JAVA_OOPs;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Clinic {
    private Map<String, List<Visitor>> appointmentSchedule;

    public Clinic() {
        this.appointmentSchedule = new HashMap<>();
    }

    // Add a new visitor
    public void addVisitor(Visitor visitor, String date, String timeSlot) {
        visitor.setAppointmentDate(date);
        visitor.setAppointmentTimeSlot(timeSlot);

        appointmentSchedule.putIfAbsent(date, new ArrayList<>());
        appointmentSchedule.get(date).add(visitor);
    }

    // Edit visitor details
    public void editVisitorDetails(Visitor visitor, String newName, int newAge, String newPhoneNumber) {
        visitor.name = newName;
        visitor.age = newAge;
        visitor.phoneNumber = newPhoneNumber;
    }

    // View appointment schedule for a day
    public List<Visitor> getAppointmentScheduleForDay(String date) {
        return appointmentSchedule.getOrDefault(date, new ArrayList<>());
    }

    // Book an appointment
    public boolean bookAppointment(String date, String timeSlot) {
        List<Visitor> appointments = appointmentSchedule.getOrDefault(date, new ArrayList<>());
        if (appointments.size() >= 2) {
            return false; // No more slots available for the day
        }
        
        Visitor visitor = new Visitor("", 0, "");
        visitor.setAppointmentDate(date);
        visitor.setAppointmentTimeSlot(timeSlot);

        appointmentSchedule.putIfAbsent(date, new ArrayList<>());
        appointmentSchedule.get(date).add(visitor);

        return true;
    }

    // Edit appointment
    public boolean editAppointment(String oldDate, String oldTimeSlot, String newDate, String newTimeSlot) {
        List<Visitor> oldAppointments = appointmentSchedule.getOrDefault(oldDate, new ArrayList<>());
        List<Visitor> newAppointments = appointmentSchedule.getOrDefault(newDate, new ArrayList<>());

        if (newAppointments.size() >= 2) {
            return false; // No more slots available for the new date
        }

        Visitor visitorToMove = null;
        for (Visitor visitor : oldAppointments) {
            if (visitor.getAppointmentTimeSlot().equals(oldTimeSlot)) {
                visitorToMove = visitor;
                break;
            }
        }

        if (visitorToMove != null) {
            oldAppointments.remove(visitorToMove);
            newAppointments.add(visitorToMove);

            visitorToMove.setAppointmentDate(newDate);
            visitorToMove.setAppointmentTimeSlot(newTimeSlot);

            return true;
        }

        return false; // Visitor not found in the old slot
    }

    // Cancel appointment
    public boolean cancelAppointment(String date, String timeSlot) {
        List<Visitor> appointments = appointmentSchedule.getOrDefault(date, new ArrayList<>());

        Visitor visitorToRemove = null;
        for (Visitor visitor : appointments) {
            if (visitor.getAppointmentTimeSlot().equals(timeSlot)) {
                visitorToRemove = visitor;
                break;
            }
        }

        if (visitorToRemove != null) {
            appointments.remove(visitorToRemove);
            return true;
        }

        return false; // Visitor not found in the slot
    }
}
