package my.company;

import io.restassured.RestAssured;
import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.arquillian.test.api.ArquillianResource;
import org.jboss.shrinkwrap.api.exporter.ZipExporter;
import org.jboss.shrinkwrap.api.spec.WebArchive;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;

import java.io.File;
import java.net.URL;

import com.sap.cloud.sdk.testutil.MockUtil;

import static io.restassured.RestAssured.when;

@RunWith(Arquillian.class)
public class OrderServiceTest {

    private static final MockUtil mockUtil = new MockUtil();

    private final String ORDER_GUID="46262d7a-0fe3-11e8-b642-0ed5f89f718b";

    @ArquillianResource
    private URL baseUrl;

    @Deployment
    public static WebArchive createDeployment() {
        return TestUtil.createDeployment(OrdersService.class);
    }


    @BeforeClass
    public static void beforeClass() {
        mockUtil.mockDefaults();
    }

    @Before
    public void before() {
        RestAssured.baseURI = baseUrl.toExternalForm();
        RestAssured.urlEncodingEnabled = false;
    }

    @Test
    public void testGetOrder() {
        // String path = "/odata/v2/CatalogService/Orders(guid'{guid}')";
        // when()
        //     .get(path, ORDER_GUID)
        // .then()
        //     .statusCode(200);
    }

    @Test
    public void testGetAllOrders() {
        // String path = "/odata/v2/CatalogService/Orders";
        // when()
        //     .get(path)
        // .then()
        //     .statusCode(200);
    }
}
