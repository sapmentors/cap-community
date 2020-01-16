package my.company;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.sap.cloud.sdk.cloudplatform.connectivity.DestinationsRequestContextListener;
import com.sap.cloud.sdk.cloudplatform.exception.ShouldNotHappenException;
import com.sap.cloud.sdk.cloudplatform.security.user.UserRequestContextListener;
import com.sap.cloud.sdk.cloudplatform.servlet.RequestContextCallable;
import com.sap.cloud.sdk.cloudplatform.servlet.RequestContextServletFilter;
import com.sap.cloud.sdk.cloudplatform.tenant.TenantRequestContextListener;

import io.restassured.mapper.ObjectMapperType;
import org.jboss.shrinkwrap.api.ArchivePaths;
import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.shrinkwrap.api.asset.ByteArrayAsset;
import org.jboss.shrinkwrap.api.spec.WebArchive;

public class TestUtil {
    public static WebArchive createDeployment(final Class<?>... classesUnderTest) {
        return ShrinkWrap
                .create(WebArchive.class)
                .addClasses(classesUnderTest)
                .addClasses(RequestContextServletFilter.class, RequestContextCallable.class)
                .addClass(TenantRequestContextListener.class)
                .addClass(UserRequestContextListener.class)
                .addClass(DestinationsRequestContextListener.class)
                .addAsManifestResource("arquillian.xml")
                .setWebXML("web.xml")
                .addAsWebInfResource("spring-security.xml")
                .addAsWebInfResource(new ByteArrayAsset("<beans/>".getBytes()), ArchivePaths.create("beans.xml"));
    }

    public static ObjectMapperType objectMapperType() {
        return ObjectMapperType.JACKSON_2;
    }

    public static String toJson(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (final JsonProcessingException e) {
            throw new ShouldNotHappenException(e);
        }
    }
}
