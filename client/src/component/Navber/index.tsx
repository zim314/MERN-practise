import { Link } from 'react-router-dom';

const Navber = () => {
    const handleLogout = () => {};

    return (
        <div>
            <nav>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                            className="collapse navbar-collapse"
                            id="navbarNav"
                        >
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">
                                        首頁
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">
                                        註冊會員
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        會員登入
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link
                                        onClick={handleLogout}
                                        className="nav-link"
                                        to="/"
                                    >
                                        登出
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">
                                        個人頁面
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/course">
                                        課程頁面
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/postCourse">
                                        新增課程
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/enroll">
                                        註冊課程
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </nav>
        </div>
    );
};

export default Navber;