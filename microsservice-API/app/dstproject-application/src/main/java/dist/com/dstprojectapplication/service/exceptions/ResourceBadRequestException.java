package dist.com.dstprojectapplication.service.exceptions;

public class ResourceBadRequestException extends RuntimeException{
	
	private static final long serialVersionUID = 1L;
	
	public ResourceBadRequestException(String msg) {
		super(msg);
	}
	
}
