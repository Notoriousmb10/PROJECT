import PropTypes from 'prop-types';

const SimCardActivation = ({
    simNumber,
    setSimNumber,
    phoneNumber,
    setPhoneNumber,
    handleActivate,
    handleDeactivate,
    handleGetDetails,
    message,
    simDetails
}) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center">SIM Card Activation</h1>
                <input
                    type="text"
                    placeholder="Enter SIM Number"
                    value={simNumber}
                    onChange={(e) => setSimNumber(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />
                <input
                    type="text"
                    placeholder="Enter Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />
                <div className="flex justify-between mb-4">
                    <button
                        onClick={handleActivate}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Activate SIM
                    </button>
                    <button
                        onClick={handleDeactivate}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Deactivate SIM
                    </button>
                    <button
                        onClick={handleGetDetails}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        Get SIM Details
                    </button>
                </div>
                {message && <p className="text-center text-red-500 mb-4">{message}</p>}
                {simDetails && (
                    <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                        {JSON.stringify(simDetails, null, 2)}
                    </pre>
                )}
            </div>
        </div>
    );
};

SimCardActivation.propTypes = {
    simNumber: PropTypes.string.isRequired,
    setSimNumber: PropTypes.func.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    setPhoneNumber: PropTypes.func.isRequired,
    handleActivate: PropTypes.func.isRequired,
    handleDeactivate: PropTypes.func.isRequired,
    handleGetDetails: PropTypes.func.isRequired,
    message: PropTypes.string,
    simDetails: PropTypes.object
};

export default SimCardActivation;