package dist.com.dstprojectapplication.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "dist_workers")
public class Workers implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="workerid")
	private long  workerId;
	
	@Column(name="workername")
	private String workerName; 
	
	@Column(name="workeremail" ,unique = true)
	private String  workerEmail;
	
	@Column(name="workerpost")
	private String  workerPost;
	
	@Column(name="workeraddress")
	private String  workerAddress;
	
	@Column(name="workerphonenumber")
	private String  workerPhoneNumber;
	
	@Column(name="workerage")
	private String  workerAge;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User admin;
	
	public Workers() {}

	public Workers(long workerId, String workerName, String workerEmail, String workerPost, String workerAddress,
			String workerPhoneNumber, String workerAge, User admin) {
		this.workerId = workerId;
		this.workerName = workerName;
		this.workerEmail = workerEmail;
		this.workerPost = workerPost;
		this.workerAddress = workerAddress;
		this.workerPhoneNumber = workerPhoneNumber;
		this.workerAge = workerAge;
		this.admin = admin;
	}

	public long getWorkerId() {
		return workerId;
	}

	public void setWorkerId(long workerId) {
		this.workerId = workerId;
	}

	public String getWorkerName() {
		return workerName;
	}

	public void setWorkerName(String workerName) {
		this.workerName = workerName;
	}

	public String getWorkerEmail() {
		return workerEmail;
	}

	public void setWorkerEmail(String workerEmail) {
		this.workerEmail = workerEmail;
	}

	public String getWorkerPost() {
		return workerPost;
	}

	public void setWorkerPost(String workerPost) {
		this.workerPost = workerPost;
	}

	public String getWorkerAddress() {
		return workerAddress;
	}

	public void setWorkerAddress(String workerAddress) {
		this.workerAddress = workerAddress;
	}

	public String getWorkerPhoneNumber() {
		return workerPhoneNumber;
	}

	public void setWorkerPhoneNumber(String workerPhoneNumber) {
		this.workerPhoneNumber = workerPhoneNumber;
	}

	public String getWorkerAge() {
		return workerAge;
	}

	public void setWorkerAge(String workerAge) {
		this.workerAge = workerAge;
	}

	public User getadmin() {
		return admin;
	}

	public void setUser(User admin) {
		this.admin = admin;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (workerId ^ (workerId >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Workers other = (Workers) obj;
		if (workerId != other.workerId)
			return false;
		return true;
	}
}
